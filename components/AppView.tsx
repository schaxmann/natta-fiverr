import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import AppDemo from "./AppDemo";

const AppView = () => {
  const [runDemo, setRunDemo] = useState(false);
  const [username, setUsername] = useState("");

  const videoRef = useRef(null);

  return (
    <Box
      id="boundingBox"
      height="100vh"
      width="calc(100vh * (9/19.5))"
      minWidth="calc(100vh * (9/19.5))"
      bg="black"
      boxShadow="xl"
    >
      <AppDemo runDemo={runDemo} />
    </Box>
  );
};

export default AppView;

// TODO Webcam stream loading
