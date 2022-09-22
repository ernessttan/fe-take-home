import { Flex, Link, Button } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import NextLink from 'next/link';
import HypeLogo from './HypeLogo';
import { AppContext } from '../context/AppContext';
import { DarkModeSwitch } from './DarkModeSwitch';

export function Header() {
  const { colorMode } = useContext(AppContext);

  return (
    <Flex
      justifyContent="between"
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="1"
      px="5"
      bg={colorMode === 'dark' ? 'navigation' : 'white'}
    >
      <Flex w="100%" h="80px" alignItems="center">
        <NextLink href="/">
          <Link>
            <HypeLogo
              fillColor={colorMode === 'dark' ? 'white' : 'black'}
              height={30}
            />
          </Link>
        </NextLink>
      </Flex>
      <Flex gap="2">
        <NextLink href="/watchlist">
          <Link>
            <Button
              aria-label="Open Watchlist"
              _hover={{ bg: 'primary75', color: 'white' }}
              variant="ghost"
            >
              <ViewIcon />
            </Button>
          </Link>
        </NextLink>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
}
