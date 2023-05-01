import { Box, Flex } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";

export const MobileViewBox = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 30px;
  margin-bottom: 30px;
  z-index: 1200;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileLinks = styled.div`
  text-align: center;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #00c;
    color: #fff;
    border-radius: 4px;
  }
`;

export const HeaderContainer = styled.div`
  background: transparent;
  width: 100%;
  color: #fff;
  display: flex;
  padding: 24px 50px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  @media (max-width: 768px) {
    padding: 18px 30px;
  }
`;

export const HeaderContainerFixed = styled(HeaderContainer)`
  background: rgba(2, 0, 36, 1);
  color: #fff;
`;

export const NavTitle = styled(Box)`
  font-size: 20px;
`;

export const NavLinks = styled(Flex)`
  align-items: center;
  column-gap: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavSocialLinks = styled(Flex)`
  align-items: center;
  column-gap: 12px;
`;

export const IconContainer = styled.a`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 50%;
`;

export const IconImg = styled(Image)`
  height: 24px;
  width: 24px;
  @media (max-width: 600px) {
    height: 20px;
    width: 20px;
  }
`;
