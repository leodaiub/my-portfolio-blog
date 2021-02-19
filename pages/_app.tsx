import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Fonts } from "../theme/Fonts";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
};

const theme = extendTheme({ colors, fonts: colors.fonts });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
