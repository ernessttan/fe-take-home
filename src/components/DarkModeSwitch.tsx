import { useColorMode, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Button
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      variant="ghost"
      _hover={{ bg: 'primary75', color: 'white' }}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
