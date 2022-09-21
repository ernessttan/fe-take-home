import {
  Flex, Box, Image, Grid, Heading, Text, Button, IconButton, Link,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { FaTwitter, FaGlobe, FaDiscord } from 'react-icons/fa';

export function Information(props: any) {
  const {
    project, colorMode, setWatchList, isWatched,
  } = props;

  const addToWatchList = () => {
    setWatchList((prev: any) => [...prev, project.project_id]);
  };

  console.log(isWatched);

  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '5', md: '10' }} alignItems="center">
      <Box borderRadius="lg" overflow="hidden" w={{ base: '40', md: '60' }} h={{ base: '40', md: '60' }}>
        <Image src={project.project.img_url} />
      </Box>
      <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }} gap="5">
        <Heading as="h1" size="xl" color={colorMode === 'dark' ? 'white' : 'black'}>{project.project.display_name}</Heading>
        <Flex alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }} gap="2">
          <Link href={project.project.twitter}>
            <IconButton
              aria-label="Twitter Link"
              _hover={{ bg: 'primary75', color: 'white' }}
              color="white"
              colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
              icon={<FaTwitter />}
            />
          </Link>
          <Link href={project.project.website}>
            <IconButton
              aria-label="Website Link"
              _hover={{ bg: 'primary75', color: 'white' }}
              color="white"
              colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
              icon={<FaGlobe />}
            />
          </Link>
          <Link href={project.project.discord}>
            <IconButton
              aria-label="Website Link"
              _hover={{ bg: 'primary75', color: 'white' }}
              color="white"
              colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
              icon={<FaDiscord />}
            />
          </Link>
          <Button
            aria-label="Watch Project"
            isActive={isWatched}
            _active={{ bg: 'primary75', color: 'white' }}
            _hover={{ bg: 'primary75', color: 'white' }}
            color="white"
            colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
            display="flex"
            alignItems="center"
            gap="2"
            onClick={addToWatchList}
          >
            <ViewIcon />
            Watch
          </Button>
        </Flex>
        <Grid w="100%" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, auto)' }} templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} gap={{ base: '5', md: '10' }}>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {project.rank}
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Rank</Text>
          </Flex>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {Math.round(project.percentage_of_token_listed * 100)}
              {' '}
              %
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Listed</Text>
          </Flex>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {project.volume_1day}
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>1 Day Volume</Text>
          </Flex>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {project.floor_price}
              {' '}
              SOL
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Floor Price</Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}
