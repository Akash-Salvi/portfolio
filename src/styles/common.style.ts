import { Box } from "@mantine/core";
import styled from "styled-components";

export const SectionBackground = styled(Box)`
  background: linear-gradient(280deg, #0030e4, #000000, #0030e4);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 20s ease infinite;
  -moz-animation: AnimationName 20s ease infinite;
  animation: AnimationName 20s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
`;
