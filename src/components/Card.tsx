import * as React from "react";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

type Props = {
  heading: string;
  children: React.ReactNode;
};

export const Card = ({ heading, children }: Props) => {
  const background = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Flex
      direction="column"
      borderRadius="md"
      shadow="lg"
      padding={3}
      alignItems="center"
      backgroundColor={background}
    >
      <Heading size="md" paddingBottom={1}>
        {heading}
      </Heading>
      {children}
    </Flex>
  );
};
