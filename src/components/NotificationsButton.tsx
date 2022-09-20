import {
  IconButton,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

export function NotificatiomsButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        aria-label="Toggle Notifications"
        onClick={onOpen}
        _hover={{ bg: 'primary75', color: 'white' }}
        variant="ghost"
      >
        <BellIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications</DrawerHeader>
          <DrawerBody />
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
}
