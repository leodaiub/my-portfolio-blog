import React from "react";
import { RichText } from "prismic-reactjs";
import { Box, Text, Flex, Link as A, Button } from "@chakra-ui/react";
import Link from "next/link";
import { WarningIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

/**
 * Homepage header component
 */
const Header = ({ image, headline, description }: any) => {
  return (
    <Box color="gray.100" width="90%" margin="auto">
      <Flex p="4" justify="space-around" align="center">
        <Link href="/">
          <A
            display="flex"
            alignItems="center"
            _hover={{ color: "green.300" }}
            color="gray.100"
            fontSize="2xl"
          >
            <Image width="25px" height="25px" mr="3" src="/code-school.svg" />
            {RichText.asText(headline)}
          </A>
        </Link>

        <Box display="flex" alignItems="center">
          <Link href="/blog">
            <A _hover={{ color: "green.300" }} mr="6" fontSize="lg">
              Posts
            </A>
          </Link>

          <Link href="/projects">
            <A _hover={{ color: "green.300" }} mr="6" fontSize="lg">
              Projects
            </A>
          </Link>
          <Link href="/projects">
            <Button
              _hover={{ color: "green.300" }}
              fontSize="lg"
              variant="outline"
              colorScheme="green"
            >
              Projects
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
