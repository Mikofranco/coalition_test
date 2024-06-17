import "./App.css";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import LeftSect from "./components/leftSect/LeftSect";
import Middle from "./components/middleSect/Middle";
import RightSect from "./components/rightSect/RightSect";
import DiagonisticList from "./components/DiagonisticList/DiagonisticList";
import LabResult from "./components/labresult/LabResult";

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <Box >
      <NavBar />
      <Flex gap={"1.5rem"} p={7}>
        <LeftSect onPatientClick={handlePatientClick} flex={1} w={"100%"} />
        
        <Box
         flex={1}
        >
          <Middle
           
            patient={selectedPatient}
          />
          <DiagonisticList patient={selectedPatient} />
        </Box>
        
        <Box flex={1}>
          <RightSect patient={selectedPatient} />
          <LabResult patient={selectedPatient} />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
