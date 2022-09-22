import {
  Flex, Box, Image, Grid, Heading, Text, Button, IconButton, Link, useToast,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { FaTwitter, FaGlobe, FaDiscord } from 'react-icons/fa';
import { FC } from 'react';

type InformationProps = {
  projectId: string,
  imageSrc: string,
  displayName: string,
  floorPrice: number,
  oneDayVolume: number,
  percentListed: number,
  rank: number,
  twitter: string,
  website: string,
  discord: string,
  isWatched: boolean,
  setWatchList: (prev: any) => void,
  colorMode: string,
}

const Information: FC<InformationProps> = ({
  projectId, imageSrc, displayName, floorPrice, oneDayVolume, rank,
  percentListed, twitter, website, discord, isWatched, setWatchList, colorMode,
}) => {
  const toast = useToast();

  const addToWatchList = () => {
    if (!isWatched) {
      setWatchList((prev: any) => [...prev, projectId]);
      toast({
        title: 'Added to Watchlist',
        description: 'You can now view this project in your watchlist',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } else {
      setWatchList((prev: any) => prev.filter((id: string) => id !== projectId));
      toast({
        title: 'Removed from Watchlist',
        description: 'You can no longer view this project in your watchlist',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '5', md: '10' }} alignItems="center" position="relative">
      <Box borderRadius="lg" overflow="hidden" w={{ base: '40', md: '60' }} h={{ base: '40', md: '60' }}>
        <Image src={imageSrc} />
      </Box>
      <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }} gap="5">
        <Heading as="h1" size="xl" color={colorMode === 'dark' ? 'white' : 'black'}>{displayName}</Heading>
        <Flex alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }} gap="2">
          <Link href={twitter}>
            <IconButton
              aria-label="Twitter Link"
              _hover={{ bg: 'primary75', color: 'white' }}
              color="white"
              colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
              icon={<FaTwitter />}
            />
          </Link>
          <Link href={website}>
            <IconButton
              aria-label="Website Link"
              _hover={{ bg: 'primary75', color: 'white' }}
              color="white"
              colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
              icon={<FaGlobe />}
            />
          </Link>
          <Link href={discord}>
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
        <Grid
          w="100%"
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, auto)' }}
          templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
          gap={{ base: '5', md: '10' }}
        >
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {rank}
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Rank</Text>
          </Flex>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {Math.round(percentListed * 100)}
              {' '}
              %
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Listed</Text>
          </Flex>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {oneDayVolume}
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>1 Day Volume</Text>
          </Flex>
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
              {floorPrice}
              {' '}
              SOL
            </Heading>
            <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Floor Price</Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Information;
