import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Flex,
  Spacer,
  Center,
  Square,
  Box,
  Text,
  Image,
  Stack,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        {/* <HomepageHeader /> */}
        <Flex color="white">
          <Center w="50%" bg="blue.500">
            <Stack spacing={1}>
              <Text fontSize="5xl">Perfect Game</Text>
              <Text fontSize="2xl">2022 Brand Guide</Text>
              <Text fontSize="xs">Version: 12.7.2022 </Text>
              <Button colorScheme="white">Get Started</Button>
            </Stack>
          </Center>

          <Box flex="1" bg="tomato">
            <Image
              src="https://res.cloudinary.com/jeffreymc/image/upload/v1643384297/Perfect%20Game/Marketing%20Photos/PG_Game_52_f0ywkw.jpg"
              alt="Dan Abramov"
              objectFit="cover"
            ></Image>
          </Box>
        </Flex>
        {/* <main>
          <HomepageFeatures />
        </main> */}
      </Layout>
    </ChakraProvider>
  );
}