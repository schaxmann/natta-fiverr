import { Box, Container, Flex, Center, Stack } from "@chakra-ui/react";
import LeftColumn from "./LeftColumn";
import AppView from "./AppView";
import RightColumn from "./RightColumn";

const Homepage = () => {
  return (
    <Flex
      px={{ md: "8", xl: "16" }}
      gap={{ md: "4rem", xl: "6rem" }}
      as="main"
      justify="center"
      flexDir={{ base: "column", md: "row" }}
    >
      <Stack flex="1">
        <LeftColumn />
        <Box display={{ base: "none", md: "block", xl: "none" }}>
          <RightColumn />
        </Box>
      </Stack>
      <AppView />
      <Center flex="1" display={{ base: "flex", md: "none", xl: "flex" }}>
        <RightColumn />
      </Center>
    </Flex>
  );
};

export default Homepage;
