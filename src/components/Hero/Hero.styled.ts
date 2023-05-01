import { SectionBackground } from "@/styles/common.style";
import { Box, Button, Flex } from "@mantine/core";
import styled from "styled-components";

export const HeroContainer = styled(Flex)`
  height: 800px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledText = styled(Box)`
  color: #fff;
  font-size: 26px;
  font-family: Special Elite, cursive;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MyName = styled(Box)`
  color: #fff;
  font-size: 56px;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const SubInfo = styled(Box)`
  color: #fff;
  font-size: 24px;
  max-width: 500px;
  width: auto;
  margin: 0 32px;
  margin-top: 10px;
  line-height: 34px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled(Flex)`
  margin-top: 28px;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    row-gap: 12px;
  }
`;
export const ProjectButton = styled(Button)`
  font-size: 16px;
  height: 40px;
  width: 140px;
`;

export const AboutMeButton = styled(ProjectButton)`
  background-color: #dc6601;
  &:hover {
    background-color: #ff8c28;
  }
`;

export const ResumeButton = styled(ProjectButton)`
  background-color: green;
  &:hover {
    background-color: #3bb143;
  }
`;
