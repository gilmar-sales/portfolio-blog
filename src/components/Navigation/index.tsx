import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

interface NavigationProps {
  active?: string;
}

const Navigation: React.FC<NavigationProps> = ({ active, children }) => {
  return (
    <>
      <Flex
        padding={{ sm: '0', md: '2' }}
        marginBottom="10"
        justifyContent="flex-end"
        minW="full"
      >
        <Flex
          w={{ sm: 'full', md: 'fit-content' }}
          justifyContent="center"
          bg="black"
          color="white"
        >
          <Link href="/">
            <Button
              colorScheme="black"
              color={active == 'home' && '#87BBFB'}
              size="lg"
            >
              início
            </Button>
          </Link>
          <Link href="/tools">
            <Button
              colorScheme="black"
              color={active == 'tools' && '#87BBFB'}
              size="lg"
            >
              ferramentas
            </Button>
          </Link>

          <Link href="/projects">
            <Button
              colorScheme="black"
              color={active == 'projects' && '#87BBFB'}
              size="lg"
            >
              projetos
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              colorScheme="black"
              color={active == 'blog' && '#87BBFB'}
              size="lg"
            >
              blog
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Box padding="2">{children}</Box>
    </>
  );
};

export default Navigation;
