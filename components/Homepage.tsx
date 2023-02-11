import { Box, Container, Flex, Center, Stack } from "@chakra-ui/react";
import LeftColumn from "./LeftColumn";
import AppView from "./AppView";
import RightColumn from "./RightColumn";

const Homepage = () => {
  return (
    <Flex
      pos="relative"
      overflowY="auto"
      overscrollBehaviorY="contain"
      scrollSnapType="y mandatory"
      height="100vh"
      px={{ md: "8", xl: "16" }}
      gap={{ md: "4rem", xl: "6rem" }}
      as="main"
      flexDir={{ base: "column", md: "row" }}
    >
      <Stack flex="1" scrollSnapAlign="center">
        <LeftColumn />
        <Box display={{ base: "none", md: "block", xl: "none" }}>
          <RightColumn />
        </Box>
      </Stack>
      <AppView />
      <Center
        scrollSnapAlign="center"
        flex="1"
        display={{ base: "flex", md: "none", xl: "flex" }}
      >
        <RightColumn />
      </Center>
    </Flex>
  );
};

export default Homepage;
