import * as React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as LinkedInLogo } from "../assets/linkedin.svg";
import { ReactComponent as GitHubLogo } from "../assets/github.svg";

const lightModeColor = "#1A202C";
const lightModeAlpha = "1";
const darkModeColor = "white";
const darkModeAlpha = "0.92";

export const LinkedInButton = () => {
  const iconColor = useColorModeValue(lightModeColor, darkModeColor);
  const iconAlpha = useColorModeValue(lightModeAlpha, darkModeAlpha);

  return (
    <Button
      as="a"
      href="https://www.linkedin.com/in/seanslanec/"
      target="_blank"
      leftIcon={<LinkedInLogo fill={iconColor} fillOpacity={iconAlpha} />}
    >
      LinkedIn
    </Button>
  );
};

export const GitHubButton = () => {
  const iconColor = useColorModeValue(lightModeColor, darkModeColor);
  const iconAlpha = useColorModeValue(lightModeAlpha, darkModeAlpha);

  return (
    <Button
      as="a"
      href="https://github.com/sslanec"
      target="_blank"
      leftIcon={<GitHubLogo fill={iconColor} fillOpacity={iconAlpha} />}
    >
      GitHub
    </Button>
  );
};
