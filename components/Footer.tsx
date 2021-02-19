import React from "react";
import { RichText } from "prismic-reactjs";
import { Box, Text, Flex, Link as A, Button } from "@chakra-ui/react";
import Link from "next/link";
import { WarningIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { FaGithub, FaInstagram } from "react-icons/fa";
/**
 * Homepage Footer component
 */
const Footer = () => {
  return (
    <Box color="gray.100" width="90%" margin="auto">
      <Flex p="4" justify="space-around" align="center">
        <A
          display="flex"
          alignItems="center"
          _hover={{ color: "green.300" }}
          color="gray.100"
          fontSize="lg"
        >
          Made with love by
          {" Leonardo Daiub"}
        </A>
        <Box display="flex" alignItems="center">
          <Link href="/blog">
            <A _hover={{ color: "green.300" }} mr="6" fontSize="lg">
              <FaInstagram />
            </A>
          </Link>

          <Link href="/projects">
            <A _hover={{ color: "green.300" }} mr="6" fontSize="lg">
              <FaGithub />
            </A>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
