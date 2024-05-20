import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import analyticsIcon from "../assets/images/analyticsIcon.svg";
import Cards from "./joinSection/Cards";
import { LandingPageWhySec } from "../../utils/data";
import { useGetScreenSize } from "../../utils/screenCheck";

const WhyJoinSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { mobile, pc, tab } = useGetScreenSize();
  
    useEffect(() => {
      setIsMobile(mobile); 
    }, [mobile]);
  return (
    <Box className="container" maxW={"1200px"} m={["2rem auto", "5rem auto"]} p={isMobile ? "2rem" : "0"}>
      <Box className="info-area" margin={["2rem auto", "5rem auto"]}>
        <Heading textAlign={"center"} margin={["0.5rem auto", "2rem auto"]}>
          Why you should join Chatter
        </Heading>
        <Text textAlign={isMobile ? "center": "left"}>
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </Text>
      </Box>
      <Flex className="cards" w={"fit-content"} margin={"auto"} gap={"5"} flexDirection={isMobile ? "column" : "unset"}>
        {LandingPageWhySec.map((data) => (
          <Cards
            icon={data.icon}
            heading={data.heading}
            content={data.content}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default WhyJoinSection;
