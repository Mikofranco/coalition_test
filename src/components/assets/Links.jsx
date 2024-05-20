import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetScreenSize } from "../../utils/screenCheck";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const UnOrderdList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;
const List = styled.li`
  list-style: none;
  cursor: pointer;
`;

const Links = () => {
 
  return (
    <Container>
      <UnOrderdList>
        <List>Home</List>
        <List>About us</List>
        <List>contact us</List>
        <List>Blog</List>
      </UnOrderdList>
    </Container>
  );
};

export default Links;
