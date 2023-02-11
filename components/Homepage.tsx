import { Container, Flex } from "@chakra-ui/react";
import LeftColumn from "./LeftColumn";
import AppView from "./AppView";
import RightColumn from "./RightColumn";

const Homepage = () => {
  return (
    <Flex
      px={{ md: "8", xl: "16" }}
      gap={{ md: "4rem", xl: "6rem" }}
      as="main"
      height="100vh"
      width="100vw"
      justify="center"
    >
      <LeftColumn />
      <AppView />
      <RightColumn />
    </Flex>
  );
};

export default Homepage;
