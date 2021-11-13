import React from "react";
import styled from "styled-components";
import Step from "./Step";
import { StepList } from "./StepAPI";

const GetstartedSection = () => {
  return (
    <>
      <Section>
        <Content className="container">
          <Heading>Get started with Slack</Heading>
          <Steps>
            {StepList.map((step) => {
              return <Step key={step.id} {...step} />;
            })}
          </Steps>
        </Content>
      </Section>
    </>
  );
};

export default GetstartedSection;

const Section = styled.section`
  background-color: #f6efe8;
  height: auto;
  margin-top: 80px;
`;

const Content = styled.div``;

const Steps = styled.div`
  display: flex;
  align-items: center;
  height: 320px;
  column-gap: 50px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 46px;
  padding: 80px 0 0 0;
`;
