import { Flex } from "@chakra-ui/react";
import LeftColumn from "./LeftColumn";
import AppView from "./AppView";
import RightColumn from "./RightColumn";

const Homepage = () => {
  return (
    <main>
      <Flex
        position="absolute"
        height="100vh"
        width="100vw"
        justify="center"
        justifyContent="space-between"
      >
        <LeftColumn />
        <AppView />
        <RightColumn />
      </Flex>
    </main>
  );
};

export default Homepage;
