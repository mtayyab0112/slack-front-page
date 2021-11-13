import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <MainHeader>
        <Main className="container">
          <LeftMenu>
            <Logo src="../images/logo.svg" />
            <MenuLinks>
              <Link>Product</Link>
              <Link>Enterprise</Link>
              <Link>Resourses</Link>
              <Link>Pricing</Link>
            </MenuLinks>
          </LeftMenu>
          <RightMenu>
            <TalkButton>Talk To Sales</TalkButton>
            <SignButton>Sign In</SignButton>
          </RightMenu>
        </Main>
      </MainHeader>
    </>
  );
};

export default Header;

const MainHeader = styled.header`
  position: fixed;
  background-color: #f6efe8;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled.img`
  height: 25px;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuLinks = styled.div`
  margin-left: 15px;
`;
const Link = styled.a`
  font-weight: 600;
  font-size: 15px;
  margin: 0px 23px;
  padding: 0 2px 1px 2px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const RightMenu = styled.div`
  display: flex;
`;

const TalkButton = styled.a`
  background-color: transparent;
  padding: 0.75rem 1rem;
  color: #611f69;
  border: 1px solid #611f69;
  margin: 0 10px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: transparent;
  }
`;
const SignButton = styled(TalkButton)`
  background-color: #611f69;
  color: #fff;

  &:hover {
    background-color: #4a154b;
  }
`;
