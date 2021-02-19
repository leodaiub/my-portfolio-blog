import Footer from "components/Footer";
import { Box } from "@chakra-ui/react";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <Box w="100%" minH="100vh" bgGradient="linear(to-t,teal.900, black)" cl>
    <Box as="main" minH="90vh">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default DefaultLayout;
