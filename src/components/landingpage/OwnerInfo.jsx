import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import AuthBtn from "../assets/AuthBtn";
import pic from "../assets/images/ownerImage.svg";

const OwnerInfo = () => {
  return (
    <Box className="container" bgColor={"#FFEDCC80"} display={"flex"} justifyContent={"center"}>
      <Flex className="wrapper" maxW={"1400px"} alignItems={"center"} gap={["10px","2rem"]} p={["1rem 2rem","5rem 0"]}>
        <Box flex={"1"} display={["none","block"]}>
          <Image src={pic} alt="Owners profile Picture" width={"100%"} borderRadius={"50%"}/>
        </Box>
        <Box fontSize={"large"} flex={"5"}>
          <Text>
            "Chatter has become an integral part of my online experience. As a
            user of this incredible blogging platform, I have discovered a
            vibrant community of individuals who are passionate about sharing
            their ideas and engaging in thoughtful discussions.”
          </Text>
          <Text m={["2.5rem 0"]}><Text display={"inline"} fontWeight={"bold"}>Adebobola Muhydeen</Text>, Software developer at Apple</Text>
          <AuthBtn authText="Join Chatter" />
        </Box>
      </Flex>
    </Box>
  );
};

export default OwnerInfo;
