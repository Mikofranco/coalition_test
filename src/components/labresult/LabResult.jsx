import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { jesica } from "../../utils/data";
import downloadIcon from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1) (1).svg"

const LabResult = ({ patient }) => {
  const jessicaLabResult = jesica.lab_results;
  return (
    <Box backgroundColor={"#fff"} borderRadius={"20px"} mt={7} p={7}>
      <Heading fontSize={"x-large"} mb={7}>
        Lab Results
      </Heading>
      <Box mt={4} height="30vh" overflowY="scroll" className="custom-scrollbar">
        {jessicaLabResult.map((item) => (
          <Flex alignItems={"center"} p={5} gap={5}>
            <Text fontSize={"medium"} flex={3}>{item}</Text>
            <Image src={downloadIcon} flex={1} w={6}  h={6}/>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default LabResult;
