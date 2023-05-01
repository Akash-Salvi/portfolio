/* eslint-disable @next/next/no-img-element */
import { Flex } from "@mantine/core";
import { config, useSpring } from "react-spring";
import MyImage from "../../assets/1584.jpeg";
import GithubIcon from "../../assets/svg/github-icon.svg";
import InstaIcon from "../../assets/svg/insta-icon.svg";
import LinkdInIcon from "../../assets/svg/linkdin-icon.svg";
import Animation from "../animationedDiv";
import {
  AboutContainer,
  CardSection,
  Details,
  HoverEffect,
  IconContainer,
  IconImg,
  ImageContainer,
  MyDetails,
  Name,
  ProfileImage,
  SectionHeading,
  SocialMedia,
} from "./About.styled";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1,
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const About = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <AboutContainer>
      <SectionHeading>About</SectionHeading>
      <Flex justify="center" align="center">
        <Animation>
          <HoverEffect
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.interpolate(trans),
              marginTop: "52px",
            }}
          >
            <CardSection>
              <ImageContainer>
                <ProfileImage src={MyImage} alt="image" />
              </ImageContainer>
              <MyDetails>
                <Name>Akash Ajay Salvi</Name>
                <Details>
                  I{"'"}ve finished my engineering degree 👨‍🎓, and I{"'"}m
                  working at Crest Data Systems (CDS)🚀 in Pune right now. I am
                  a web developer 👨‍💻 as well as a Coding enthusiast 💻. I like
                  to practice competitive programming✍️. Logical Reasoning,
                  brainstorming, and problem-solving have always been part of
                  life🏆. I keep feeding my desire for technology by reading and
                  researching things related to it 📝. Aside from technical
                  abilities, I enjoy reading, painting, and going on excursions.
                </Details>
                <SocialMedia>
                  <IconContainer
                    href="https://www.linkedin.com/in/akashsalvi/"
                    target="_blank"
                  >
                    <IconImg src={LinkdInIcon} alt="linkdIn" />
                  </IconContainer>
                  <IconContainer
                    href="https://github.com/Akash-Salvi"
                    target="_blank"
                  >
                    <IconImg src={GithubIcon} alt="github" />
                  </IconContainer>
                  <IconContainer
                    href="https://www.instagram.com/akash.1_11_00/"
                    target="_blank"
                  >
                    <IconImg src={InstaIcon} alt="insta" />
                  </IconContainer>
                </SocialMedia>
              </MyDetails>
            </CardSection>
          </HoverEffect>
        </Animation>
      </Flex>
    </AboutContainer>
  );
};

export default About;
