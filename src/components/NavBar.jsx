import React, { useEffect, useState } from "react";
import Logo from "./assets/Logo";
import AuthBtn from "./assets/AuthBtn";
import styled from "styled-components";
import Links from "./assets/Links";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useGetScreenSize } from "../utils/screenCheck";
import { Box } from "@chakra-ui/react";
import MobileAuthBtn from "./MobileAuthBtn";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const MobileLinksPage = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(241, 240, 248, 0.9);
  top: 0;
  left: 0;
  padding: 3rem;
  display: ${({ display }) => display};
`;

const MobileLinks = styled.li`
  color: rgba(84, 62, 224, 0.9);
  font-size: 24px;
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
`;

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDisplay, setMobileDisplay] = useState("none");
  const { mobile } = useGetScreenSize();

  const handleDisplay = () => {
    setMobileDisplay(mobileDisplay === "none" ? "block" : "none");
  };

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <Container>
      <MobileLinksPage display={mobileDisplay}>
        <CloseIcon
          onClick={handleDisplay}
          cursor="pointer"
          color="rgba(84, 62, 224, 1)"
        />
        <MobileButtons>
          <AuthBtn authText="Log in" />
          <AuthBtn authText="Sign up" login={true} />
        </MobileButtons>
        <Box textAlign={"center"} mt={"1rem"}>
          <MobileLinks>Home</MobileLinks>
          <MobileLinks>About us</MobileLinks>
          <MobileLinks>Services</MobileLinks>
          <MobileLinks>Contact</MobileLinks>
        </Box>
      </MobileLinksPage>

      <Logo />
      <Links />
      <Buttons>
        <AuthBtn authText="Log in" />
        <AuthBtn authText="Sign up" login={true} />
      </Buttons>
      {isMobile && (
        <HamburgerIcon
          color={"rgba(84, 62, 224, 1)"}
          onClick={handleDisplay} // Corrected onClick
          cursor="pointer"
        />
      )}
    </Container>
  );
};

export default NavBar;
