import React from "react";
import PostItem from "./PostItem";
import { Box } from "@chakra-ui/react";

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <Box p="4" width="80%" margin="auto" color="gray.200">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </Box>
  );
};

export default PostList;
