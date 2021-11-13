import React from "react";
import styled from "styled-components";

const Step = ({ id, title, desc }) => {
  return (
    <>
      <StepContent>
        <ListNum>{id}</ListNum>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </StepContent>
    </>
  );
};

export default Step;

const StepContent = styled.div``;

const ListNum = styled.span`
  background-color: #4a154b;
  padding: 10px 15px;
  color: white;
  font-weight: 600;
  font-size: 22px;
  border-radius: 3px;
`;
const Title = styled.h3`
  margin: 25px 0;
`;
const Description = styled.p`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 500;
`;
