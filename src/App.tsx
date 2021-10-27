import * as React from "react";
import {
  Avatar,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Card } from "./components/Card";
import avatarPic from "./assets/avatar.jpg";
import { LinkedInButton, GitHubButton } from "./components/Buttons";
import theme from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container
        display="flex"
        flexDirection="column"
        minHeight={0}
        paddingTop={2}
        paddingLeft={[2, 2, 0, 0]}
        paddingRight={[2, 2, 0, 0]}
        paddingBottom={2}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Avatar
            marginBottom={1}
            src={avatarPic}
            size="lg"
            name="Sean Slanec"
          />
          <Heading flexGrow={1} paddingLeft={2}>
            Sean Slanec
          </Heading>
          <ColorModeSwitcher />
        </Flex>
        <Text>Information Technology graduate and web developer.</Text>

        <Flex paddingTop={4} justifyContent="center" gridGap={5}>
          <LinkedInButton />
          <GitHubButton />
        </Flex>

        <Heading size="lg" paddingTop={4} paddingBottom={1}>
          Projects
        </Heading>
        <Text style={{ textIndent: -20, marginLeft: 20 }}>
          <Link
            href="https://www.pogchat.live/"
            textDecor="underline"
            isExternal
          >
            PogChat
          </Link>{" "}
          - A web-based Twitch chat alternative. Built using{" "}
          <Link href="https://reactjs.org/" textDecor="underline" isExternal>
            React
          </Link>
          ,{" "}
          <Link
            href="https://react-redux.js.org/"
            textDecor="underline"
            isExternal
          >
            React Redux
          </Link>
          ,{" "}
          <Link href="https://chakra-ui.com/" textDecor="underline" isExternal>
            Chakra UI
          </Link>
          ,{" "}
          <Link
            href="https://github.com/twurple/twurple"
            textDecor="underline"
            isExternal
          >
            Twurple
          </Link>
          , and{" "}
          <Link
            href="https://aws.amazon.com/amplify/"
            textDecor="underline"
            isExternal
          >
            AWS Amplify
          </Link>
          . Source code and demo video can be found on{" "}
          <Link
            href="https://github.com/sslanec/PogChat"
            textDecor="underline"
            isExternal
          >
            GitHub
          </Link>
          .
        </Text>

        <Heading size="lg" paddingTop={4} paddingBottom={1}>
          Skills
        </Heading>
        <SimpleGrid spacing="20px" minChildWidth={150}>
          <Card heading="Web">
            <Text>HTML/CSS/JS</Text>
            <Text>TypeScript</Text>
            <Text>React</Text>
            <Text>AWS</Text>
          </Card>
          <Card heading="Development">
            <Text>Python</Text>
            <Text>MySQL</Text>
            <Text>Git</Text>
            <Text>Agile</Text>
          </Card>
          <Card heading="Enterprise">
            <Text>VMware Vcenter</Text>
            <Text>Windows Domain</Text>
            <Text>MS Office</Text>
          </Card>
          <Card heading="Security">
            <Text>Metasploit</Text>
            <Text>Armitage</Text>
            <Text>OpenVAS</Text>
            <Text>Wireshark</Text>
          </Card>
          <Card heading="Creative">
            <Text>Adobe Photoshop</Text>
          </Card>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};
