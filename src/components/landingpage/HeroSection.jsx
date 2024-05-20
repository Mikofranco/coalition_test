import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import background from "../assets/images/heroImg.svg";
import AuthBtn from "../assets/AuthBtn";

const HeroSection = () => {
  return (
    <Box
      // position="relative"
      minH={["70vh","100vh"]}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`} // Use template literals for the url
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      color="white" 
      p={["2rem","2rem", "0"]}
    >
      <Box textAlign={"left"} maxW={"1000px"}>
        <Heading fontSize={["28px","46px"]} color={"#fff"}>
          Welcome to Chatter: A Haven for Text-Based Content
        </Heading>

        <Text fontSize={["18px","24px"]} color={"#fff"} my={5}>
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </Text>
        <AuthBtn authText="Get Started"/>
      </Box>
    </Box>
  );
};

export default HeroSection;
