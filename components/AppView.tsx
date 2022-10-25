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

const AppView = () => {
  return (
    <Box
      id="boundingBox"
      height="100vh"
      width="calc(100vh * (9/19.5))"
      minWidth="calc(100vh * (9/19.5))"
      bg="black"
      boxShadow="xl"
    >
      <Flex flexDir="column" align="center">
        <Box width="100%" height="calc(100vh * 0.4)" bg="white">
          <NextImage
            src="/Person_1.jpeg"
            layout="responsive"
            height="468px"
            width="540px"
          ></NextImage>
          <Flex
            width="100%"
            height="calc(100vh * 0.10)"
            bg="gray.300"
            flexDirection="column"
            justifyContent="flex-end"
            position="relative"
            top="calc(100vh * -0.1)"
            sx={{
              background:
                "linear-gradient(to top, rgb(0,0,0,0.6) 10%, rgb(0,0,0,0.3) 40%, rgb(255,255,255,0) 80%)",
            }}
          >
            <Flex
              width="100%"
              height="calc(100vh * 0.15)"
              bg="gray.300"
              flexDirection="row"
              position="relative"
              alignItems="flex-end"
              pb="10px"
              justifyContent="space-between"
              sx={{
                background:
                  "linear-gradient(to top, rgb(0,0,0,0.7), rgb(0,0,0,0))",
              }}
            >
              <Text
                fontSize="3xl"
                color="white"
                p="1"
                pl="3"
                fontWeight="600"
                position="relative"
                top="0.5rem"
              >
                Callum R.
              </Text>
              <ButtonGroup
                size="md"
                variant="outline"
                spacing="2"
                colorScheme="gray"
                color="white"
                p="0.2rem"
                pr="0.75rem"
              >
                <Button colorScheme="red">
                  <MdOutlinedFlag />
                </Button>
              </ButtonGroup>
            </Flex>
          </Flex>
        </Box>
        <Flex
          width="100%"
          height="calc(100vh * 0.2)"
          bg="white"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            fontSize="2xl"
            textAlign="center"
            fontWeight="600"
            display="inline"
            paddingBottom="3px"
          >
            <span
              style={{
                borderBottom: "4px solid var(--chakra-colors-gray-800)",
              }}
            >
              &quot;If you could live anywhere in the world, but you had
            </span>{" "}
            to move there tomorrow, where would you go?&quot;
          </Text>
        </Flex>
        <Box width="100%" height="calc(100vh * 0.4)" bg="white">
          <NextImage
            src="/Person_2.jpeg"
            layout="responsive"
            height="468px"
            width="540px"
          ></NextImage>
          <Flex
            width="100%"
            height="calc(100vh * 0.1)"
            bg="gray.300"
            flexDirection="column"
            justifyContent="flex-end"
            position="relative"
            top="calc(100vh * -0.1)"
            sx={{
              background:
                "linear-gradient(to top, rgb(0,0,0,0.6) 10%, rgb(0,0,0,0.3) 40%, rgb(255,255,255,0) 80%)",
            }}
          >
            <Flex
              width="100%"
              height="calc(100vh * 0.15)"
              bg="gray.300"
              flexDirection="row"
              position="relative"
              alignItems="flex-end"
              pb="10px"
              justifyContent="space-between"
              sx={{
                background:
                  "linear-gradient(to top, rgb(0,0,0,0.7), rgb(0,0,0,0))",
              }}
            >
              <Text
                fontSize="3xl"
                color="white"
                p="1"
                pl="3"
                fontWeight="600"
                position="relative"
                top="0.5rem"
              >
                Jaime F.
              </Text>
              <ButtonGroup
                size="md"
                variant="outline"
                spacing="2"
                colorScheme="gray"
                color="white"
                p="0.2rem"
                pr="0.75rem"
              >
                <Button>
                  <MdMoreTime />
                </Button>
                <Button>
                  <MdOutlineSkipNext />
                </Button>
                <Button>
                  <MdOutlineQuestionAnswer />
                </Button>
              </ButtonGroup>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AppView;
