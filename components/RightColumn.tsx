import {
  Box,
  Heading,
  Text,
  Flex,
  Switch,
  Stack,
  Center,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const RightColumn = () => {
  return (
    <Center
      minH={{ base: "100dvh", md: "auto" }}
      flex="1"
      p={{ base: 4, md: 0 }}
    >
      <Flex height="calc(100vh / 3)">
        {/* <Flex position="absolute" right="10" top="8" gap="3">
          <MdLightMode style={{ marginTop: "2px" }} />
          <Switch colorScheme="darkMode"></Switch>
          <MdDarkMode style={{ marginTop: "2px" }} />
        </Flex> */}
      </Flex>
      <Stack
        spacing={4}
        textAlign={{ xl: "end" }}
        fontSize={{ base: "xl", xl: "2xl" }}
      >
        <Heading fontSize={{ base: "2xl", xl: "3xl" }} fontWeight="800">
          Feedback:
        </Heading>

        <Text>
          Whether you rate us or want to slate us, your opinion matters to our
          team.
        </Text>
        <div
          data-tf-sidetab="qKFqQFBq"
          data-tf-custom-icon="https://images.typeform.com/images/4hxeV7NUaDsP"
          data-tf-opacity="100"
          data-tf-iframe-props="title=Product Survey_new (copy)"
          data-tf-transitive-search-params
          data-tf-button-color="#000000"
          data-tf-button-text="Feedback"
          data-tf-medium="snippet"
        ></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </Stack>
    </Center>
  );
};

export default RightColumn;
