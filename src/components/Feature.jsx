import React from "react";
import styled from "styled-components";

const Feature = ({ id, heading, paragraph, linktext, videolink }) => {
  return (
    <>
      <Main>
        <TextGroup layout={id % 2 === 0 && 1}>
          <Heading>{heading}</Heading>
          <Paragraph>{paragraph}</Paragraph>
          <Link>{linktext}</Link>
        </TextGroup>
        <Video>
          <video src={videolink} autoPlay loop muted></video>
        </Video>
      </Main>
    </>
  );
};

export default Feature;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 200px;
`;
const TextGroup = styled.div`
  margin-top: 150px;
  order: ${({ layout }) => layout || 0};
`;
const Heading = styled.h2`
  font-size: 32px;
`;
const Paragraph = styled.p`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 500;
`;
const Link = styled.a`
  font-size: 18px;
  color: #1264a3;
  cursor: pointer;
`;
const Video = styled.div`
  margin-top: 120px;
`;
