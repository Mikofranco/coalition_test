import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AuthBtn from "../assets/AuthBtn";
import images from "../assets/images/images.svg";

const Fifthsection = () => {
  return (
    <Flex
      flexDirection={["column-reverse", "unset"]}
      gap={["10px", "30px"]}
      maxW={"1200px"}
      m={["3rem auto", "5rem auto"]}
      textAlign={["center", "unset"]}
    >
      <Box className="images" flex={["1", "2"]} aspectRatio={"1:1"} w={"fit-content"} m={["15px auto","0"]}>
        <Image src={images} w={["200px", "400px"]} />
      </Box>
      <Box flex={["1", "3"]}>
        <Heading lineHeight={["40px", "70px"]}>
          Write, read and connect with great minds on chatter
        </Heading>
        <Text m={["15px auto", "15px auto"]}>
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </Text>
        <AuthBtn authText="Get started" margin-top={["5px", "30px"]} />
      </Box>
    </Flex>
  );
};

export default Fifthsection;
