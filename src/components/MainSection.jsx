import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import { BrandImages } from "./BrandImagesAPI";

const MainSection = () => {
  return (
    <>
      <Section>
        <Intro className="container">
          <TextGroup>
            <Heading>Slack is where the future works</Heading>
            <Paragraph>
              Transform the way you work with one place for <br /> everyone and
              everything you need to get stuff done.
            </Paragraph>
            <ButtonGroup>
              <TryButton>Try For Free</TryButton>
              <GoolgeButton>
                <LogoContainer>
                  <GoogleLogo src="./images/g-logo.png" />
                </LogoContainer>
                Sign Up With Goolge
              </GoolgeButton>
            </ButtonGroup>
          </TextGroup>
          <Image src="./images/img-campaign-hero.jpg" />
        </Intro>

        <Brands className="container">
          {BrandImages.map((img) => {
            return <Brand key={img.id} imgSrc={img.imgSrc} />;
          })}
        </Brands>

        <VideSection className="container">
          <Video src="./images/video-thumbnail.jpg"></Video>
          <SubTextGroup>
            <SubHeading>
              Now is your moment to build a <br /> better tomorrow
            </SubHeading>
            <Paragraph>
              We’ve seen what the future can be. Now it’s time to decide <br />
              what it will be.
            </Paragraph>
            <ButtonGroup>
              <WatchButton>Watch Video</WatchButton>
            </ButtonGroup>
          </SubTextGroup>
        </VideSection>
      </Section>
    </>
  );
};

export default MainSection;

const Section = styled.section`
  background-color: #f6efe8;
  height: 900px;
  margin-top: 80px;
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
  padding: 60px 0 0 0;
`;

const TextGroup = styled.div`
  padding: 20px 0 0 0;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.6;
`;

const Heading = styled.span`
  font-size: 60px;
  font-weight: 700;
  font-family: Slack-Larsseit, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma,
    Arial, sans-serif;
`;

const Image = styled.img`
  height: 345px;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const TryButton = styled.a`
  background-color: #611f69;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  border: 1px solid #611f69;
  letter-spacing: 1px;
  margin: 50px 0;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #4a154b;
  }
`;
const GoolgeButton = styled.a`
  background-color: #4285f4;
  padding: 3px 10px 3px 3px;
  color: white;
  border: 1px solid #4285f4;
  letter-spacing: 1px;
  margin: 50px 10px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 0;
  height: 46px;
  width: 46px;
  border-radius: 3px;
`;

const GoogleLogo = styled.img`
  height: 18px;
  width: 18px;
`;

const Brands = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const VideSection = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Video = styled.img``;

const SubTextGroup = styled.div`
  padding: 20px 0 0 0;
  margin: 0 0 0 130px;
`;

const SubHeading = styled.span`
  font-size: 30px;
  font-weight: 700;
  font-family: Slack-Larsseit, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma,
    Arial, sans-serif;
`;

const WatchButton = styled.a`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  color: #611f69;
  border: 1px solid #611f69;
  letter-spacing: 1px;
  margin: 25px 0 85px 0;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
`;
