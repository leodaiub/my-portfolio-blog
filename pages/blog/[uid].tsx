import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from "utils/queries";

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import { Header } from "~/components/home";
import { Box } from "@chakra-ui/layout";

/**
 * Post page component
 */
const Post = ({ post }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <Header
        // image={doc.data.image}
        // headline={doc.data.headline}
        // description={doc.data.description}
        />
        <Box width="80%" margin="auto" color="gray.200" className="main">
          <Box className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </Box>
          <SliceZone sliceZone={post.data.body} />
        </Box>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}: any) {
  const { ref } = previewData;
  const post =
    (await Client().getByUID("post", params.uid, ref ? { ref } : null)) || {};
  return {
    props: {
      preview,
      post,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "post"
  );
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: true,
  };
}

export default Post;
