import {
  Box,
  Button,
  ButtonGroup,
  calc,
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import "reset-css";
import {
  MdMoreTime,
  MdOutlineSkipNext,
  MdOutlineQuestionAnswer,
  MdOutlinedFlag,
} from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import NextImage from "next/image";
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
