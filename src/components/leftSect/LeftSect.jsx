import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import moreIcon from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import { fetchData } from "../../service/getService";
import "./scrolbar.css"
import ListOfUsers from "../skelenton/ListOfUsers";

const LeftSect = ({ onPatientClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);

  return (
    <Box borderRadius={"25px"} backgroundColor={"#fff"} >
      <Flex justify="space-between" align="center" p={4}>
        <Heading fontSize={"24px"}>Patients</Heading>
        <Image src={searchIcon} />
      </Flex>
      <Box mt={4} height="110vh" overflowY="scroll" className="custom-scrollbar">
        {data.length > 0 ? (
          data.map((patient, index) => (
            <Flex
              key={index}
              mb={4}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              align="center"
              onClick={() => onPatientClick(patient)}
              cursor="pointer"
              justifyContent={"space-between"} alignItems={"center"}
            >
              <Flex >
                <Image
                  src={patient.profile_picture}
                  alt={`${patient.name}'s profile`}
                  boxSize="50px"
                  borderRadius="full"
                  mr={4}
                />
                <Box flex="1">
                  <Text fontWeight="bold">{patient.name}</Text>
                  <Flex>
                    <Text fontSize={"small"} color={"#707070"}>
                      {patient.gender}, <span> </span>
                    </Text>
                    <Text fontSize={"small"} color={"#707070"}>
                      {patient.age}
                    </Text>
                  </Flex>
                </Box>
              </Flex>

              <Image src={moreIcon} />
            </Flex>
          ))
        ) : (
          <ListOfUsers className="custom-scrollbar"/>
        )}
      </Box>
    </Box>
  );
};

export default LeftSect;
