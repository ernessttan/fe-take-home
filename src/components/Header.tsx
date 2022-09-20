import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import HypeLogo from './HypeLogo';
import { AppContext } from '../context/AppContext';
import { DarkModeSwitch } from './DarkModeSwitch';
import { NotificatiomsButton } from './NotificationsButton';

export function Header() {
  const { colorMode } = useContext(AppContext);

  return (
    <Flex
      justifyContent="between"
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="1"
      px="3"
      bg={colorMode === 'dark' ? 'navigation' : 'white'}
    >
      <Flex w="100%" h="80px" alignItems="center">
        <HypeLogo
          fillColor={colorMode === 'dark' ? 'white' : 'black'}
          height={30}
        />
      </Flex>
      <Flex gap="2">
        <NotificatiomsButton />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
}
