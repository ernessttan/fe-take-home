import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
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
      zIndex="1"
      px="8"
      bg={colorMode === 'dark' ? 'navigation' : 'white'}
    >
      <Flex w="100%" h="80px" alignItems="center" px={4}>
        <HypeLogo
          fillColor={colorMode === 'dark' ? 'white' : 'black'}
          height={30}
        />
      </Flex>
      <DarkModeSwitch />
    </Flex>
  );
}
