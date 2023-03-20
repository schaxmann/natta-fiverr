import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Launch from "./Launch";
import AppDemo from "./AppDemo";

const AppView = () => {
  const [runDemo, setRunDemo] = useState(false);
  const [username, setUsername] = useState("");

  const videoRef = useRef(null);

  return (
    <Box
      scrollSnapAlign="center"
      id="boundingBox"
      // width="calc(100vh * (9/19.5))"
      minWidth="calc(100vh * (9/19.5))"
      bg="black"
      boxShadow="xl"
      mr="50px"
    >
      {/* {!runDemo ? (
        <Launch setRunDemo={setRunDemo} setUsername={setUsername} />
      ) : ( */}
      <AppDemo
        runDemo={runDemo}
        // username={username}
      />
      {/* )} */}
    </Box>
  );
};

export default AppView;

// TODO Webcam stream loading
