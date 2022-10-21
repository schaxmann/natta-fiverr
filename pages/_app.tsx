import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import "reset-css";
// import PlayerLayout from "../components/PlayerLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

// { Component, pageProps }

function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        position="absolute"
        height="100vh"
        width="100vw"
        align="center"
        justify="center"
      >
        <Box
          height="100vh"
          width="calc(100vh * 0.46208530805)"
          bg="black"
        ></Box>
      </Flex>
      {/* {Component.authpage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )} */}
    </ChakraProvider>
  );
}

export default MyApp;
