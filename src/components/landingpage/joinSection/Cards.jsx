import { Box, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Cards = (props) => {
  return (
        <Box className="card" maxW={"500px"} border={"1px solid gray"} p={5} borderRadius={5}>
          <Image src={props.icon} w={["40px", "62px"]}/>
          <Heading fontSize={"larger"} m={["10px 0","20px 0"]}>{props.heading}</Heading>
          <Text fontSize={"large"}>
           {props.content}
          </Text>
        </Box>
  )
}

export default Cards