import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex as="nav" gap={4}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/world" color="white">
            World
          </Link>
          <Link as={RouterLink} to="/business" color="white">
            Business
          </Link>
          <Link as={RouterLink} to="/tech" color="white">
            Tech
          </Link>
          <Link as={RouterLink} to="/markets" color="white">
            Markets
          </Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

const MainContent = () => (
  <Container as="main" maxW="container.xl" py={8}>
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Latest News
        </Heading>
        <Text>News article 1</Text>
        <Text>News article 2</Text>
        <Text>News article 3</Text>
      </Box>
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Business
        </Heading>
        <Text>Business article 1</Text>
        <Text>Business article 2</Text>
        <Text>Business article 3</Text>
      </Box>
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Technology
        </Heading>
        <Text>Tech article 1</Text>
        <Text>Tech article 2</Text>
        <Text>Tech article 3</Text>
      </Box>
    </VStack>
  </Container>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Text>&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Index;