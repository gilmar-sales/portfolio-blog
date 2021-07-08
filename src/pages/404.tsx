import { Container, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Container
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box shadow="lg" alignItems="center">
        <Box bg="black" color="white" padding="4" width="full">
          <Text fontSize="4xl" fontWeight="bold">
            Oops...
          </Text>
        </Box>
        <Box bg="white" padding="14" display="flex" flexDirection="column">
          <Box marginBottom="4">
            <Text fontSize="4xl" fontWeight="bold">
              404
            </Text>
            <Text>Esta página não foi encontrada.</Text>
          </Box>
          <Link href="/">
            <Button colorScheme="blue">Voltar para o início</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
