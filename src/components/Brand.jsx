import React from "react";
import styled from "styled-components";

const Brand = ({ imgSrc }) => {
  return (
    <>
      <BrandContainer>
        <BrandImg src={imgSrc} />
      </BrandContainer>
    </>
  );
};

export default Brand;

const BrandContainer = styled.div``;
const BrandImg = styled.img``;
