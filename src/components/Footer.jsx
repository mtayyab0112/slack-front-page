import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <TopFooter>
        <Heading>Welcome to where the future works</Heading>
        <ButtonGroup>
          <SignButton>Try For Free</SignButton>
          <TalkButton>Talk To Sales</TalkButton>
        </ButtonGroup>
      </TopFooter>
    </>
  );
};

export default Footer;

const TopFooter = styled.div`
  background-color: #4a154b;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: white;
  font-size: 52px;
`;

const ButtonGroup = styled.div`
  margin-top: 50px;
`;

const TalkButton = styled.a`
  background-color: transparent;
  padding: 1rem 1.2rem;
  color: #fff;
  border: 1px solid white;
  margin: 0 10px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1px;
`;
const SignButton = styled(TalkButton)`
  background-color: white;
  color: #611f69;
`;
