import React from "react";
import styled from "styled-components";
import Feature from "./Feature";
import { FeaturesList } from "./FeatureAPI";
const FeatureSection = () => {
  return (
    <>
      <Section className="container">
        {FeaturesList.map((featureDetail) => {
          return <Feature key={featureDetail.id} {...featureDetail} />;
        })}
      </Section>
    </>
  );
};

export default FeatureSection;

const Section = styled.section`
  height: auto;
`;
