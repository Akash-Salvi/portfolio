import { SectionBackground } from "@/styles/common.style";
import { Box, Flex } from "@mantine/core";
import Image from "next/image";
import { animated } from "react-spring";
import styled from "styled-components";

export const SectionHeading = styled(Box)`
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const AboutContainer = styled(Box)`
  height: 800px;
  padding-top: 48px;
  width: 100%;
  color: #fff;
`;

export const HoverEffect = styled(animated.div)`
  display: inline-block;
  background: transparent;
  border-radius: 20px;
  z-index: 1;
  position: relative;
  box-shadow: 0px 0px 60px rgb(255 255 255 / 40%),
    0px 0px 10px rgb(255 255 255 / 45%);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 0 30px;
  }
`;

export const ImageContainer = styled(Flex)`
  background-color: rgba(223, 228, 255, 0.25);
  clip-path: ellipse(100% 85% at 0% 50%);
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  }
`;

export const ProfileImage = styled(Image)`
  height: 440px;
  width: auto;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const CardSection = styled(Flex)`
  width: 860px;
  height: 440px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  transition: transform 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

export const MyDetails = styled(Box)`
  margin: auto;
  padding: 25px;
  height: fit-content;
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
    flex: 0 0 100%;
    position: static;
    padding: 10px 15px;
  }
`;

export const Name = styled(Box)`
  font-size: 36px;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const Details = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const SocialMedia = styled(Flex)`
  justify-content: center;
  column-gap: 16px;
`;

export const IconContainer = styled.a`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 50%;
  @media (max-width: 600px) {
    margin-bottom: 12px;
  }
`;

export const IconImg = styled(Image)`
  height: 32px;
  width: 32px;
  @media (max-width: 600px) {
    height: 24px;
    width: 24px;
  }
`;
