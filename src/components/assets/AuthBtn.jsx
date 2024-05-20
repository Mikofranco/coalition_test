import styled from "styled-components";

const Container = styled.button`
  color: ${(props) => (props.login ? "rgba(84, 62, 224, 1)" : "white")};
  background: ${(props) => (props.login ? "white" : "rgba(84, 62, 224, 1)")};
  font-size: 18px;
  padding: 0.5em 1em;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid rgba(84, 62, 224, 1);
  height: 3rem;
  transition: all 0.3s ease; 
  
  &:hover {
    background: ${(props) => (props.login ? "rgba(84, 62, 224, 0.8)" : "rgba(255, 255, 255, 0.8)")};
    color: ${(props) => (props.login ? "white" : "rgba(84, 62, 224, 1)")};
  }
`;

const AuthBtn = (props) => {
  return (
    <Container login={props.login}>
      {props.authText}
    </Container>
  );
};

export default AuthBtn;
