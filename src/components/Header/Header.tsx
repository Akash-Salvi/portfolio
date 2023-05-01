import { Affix, Box, Button, Flex, Menu, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import GithubIcon from "../../assets/svg/github-icon.svg";
import InstaIcon from "../../assets/svg/insta-icon.svg";
import LinkdInIcon from "../../assets/svg/linkdin-icon.svg";
import OpenIcon from "../../assets/svg/open-icon.svg";
import {
  HeaderContainer,
  HeaderContainerFixed,
  IconContainer,
  IconImg,
  MobileLinks,
  MobileViewBox,
  NavLinks,
  NavSocialLinks,
  NavTitle,
} from "./Header.styled";

const navData = [
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Accomplishment",
  },
  {
    name: "Technologies",
  },
];

const Header = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const NavLinksSection = () => (
    <NavLinks>
      {navData.map((element) => (
        <div key={element.name}>{element.name}</div>
      ))}
    </NavLinks>
  );

  return (
    <>
      <Box>
        <Affix position={{ top: 0, left: 0 }} w="100%">
          <Transition
            duration={1000}
            transition="slide-down"
            mounted={scroll.y > 80}
          >
            {(transitionStyles) => (
              <HeaderContainerFixed style={transitionStyles}>
                <NavTitle>
                  <span style={{ color: "rgb(100, 201, 230)" }}>@</span>
                  Akash.Salvi
                </NavTitle>
                <NavLinksSection />
                <NavSocialLinks>
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
                </NavSocialLinks>
              </HeaderContainerFixed>
            )}
          </Transition>
        </Affix>

        <HeaderContainer>
          <NavTitle>
            <span style={{ color: "rgb(100, 201, 230)" }}>@</span> Akash.Salvi
          </NavTitle>
          <NavLinksSection />
          <NavSocialLinks>
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
          </NavSocialLinks>
        </HeaderContainer>
      </Box>
      <MobileViewBox>
        <Menu openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Button
              style={{
                borderRadius: "50%",
                background: "white",
                height: "54px",
              }}
            >
              <Image src={OpenIcon} alt="open" />
            </Button>
          </Menu.Target>
          <Menu.Dropdown ml="-4px">
            <Flex direction="column">
              {navData.map((element) => (
                <MobileLinks key={element.name}>{element.name}</MobileLinks>
              ))}
            </Flex>
          </Menu.Dropdown>
        </Menu>
      </MobileViewBox>
    </>
  );
};

export default Header;
