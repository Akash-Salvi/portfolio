import { Flex } from "@mantine/core";
import Animation from "../animationedDiv";
import {
  AboutMeButton,
  ButtonContainer,
  HeroContainer,
  MyName,
  ProjectButton,
  ResumeButton,
  StyledText,
  SubInfo,
} from "./Hero.styled";

function Hero() {
  return (
    <Animation>
      <HeroContainer>
        <Flex direction={"column"} rowGap="12px" mt="-80px">
          <StyledText>Hi, There 👋 I’m</StyledText>
          <h1>
            <MyName>Akash Salvi</MyName>
          </h1>

          <SubInfo>
            I’m a software developer with a passion for building amazing
            websites.
          </SubInfo>

          <ButtonContainer>
            <ProjectButton>Projects</ProjectButton>
            <AboutMeButton>About Me</AboutMeButton>
            <ResumeButton>Resume</ResumeButton>
          </ButtonContainer>
        </Flex>
      </HeroContainer>
    </Animation>
  );
}

export default Hero;
