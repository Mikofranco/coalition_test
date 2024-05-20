import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import image from "../assets/images/aboutImg.svg";
import { useGetScreenSize } from "../../utils/screenCheck";

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { mobile, pc, tab } = useGetScreenSize();

  useEffect(() => {
    setIsMobile(mobile); 
  }, [mobile]);
  return (
    <Box
      className="container"
      display={"flex"}
      gap={3}
      maxW={"1200px"}
      m={["2rem auto", "6rem auto"]}
      flexDirection={isMobile ? "column" : "unset"}
      p={isMobile ? "2rem" : "0"}
    >
      <Box className="text-area" flex={3} >
        <Heading mb={"2rem"}>About Chatter</Heading>
        <Text fontSize={"large"}>
          Chatter is a multi-functional platform where authors and readers can
          have access to their own content. It aims to be a traditional
          bookworm’s heaven and a blog to get access to more text based content.
          Our vision is to foster an inclusive and vibrant community where
          diversity is celebrated. We encourage open-mindedness and respect for
          all individuals, regardless of their backgrounds or beliefs. By
          promoting dialogue and understanding, we strive{" "}
        </Text>
      </Box>
      <Box className="image-area" flex={2}>
        <Image src={image} alt="about section image" />
      </Box>
    </Box>
  );
};

export default AboutSection;
