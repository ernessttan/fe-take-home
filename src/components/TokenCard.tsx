import { FC } from 'react';
import {
  Box, Text, Image, Flex, Button,
} from '@chakra-ui/react';

type TokenProps = {
    imgSrc: string,
    name: string,
    colorMode: string,
    price: string,
}

export const TokenCard: FC<TokenProps> = ({
  imgSrc, name, colorMode, price,
}) => {
  const cleanName = (name: string) => {
    const poundIndex = name.indexOf('#');
    const cleaned = name.slice(poundIndex, name.length - 1 + 1);
    return cleaned;
  };

  return (
    <Box
      boxShadow="md"
      border="1px"
      borderColor="whiteAlpha.200"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={colorMode === 'dark' ? { bg: 'whiteAlpha.200' } : { bg: 'blackAlpha.200' }}
    >
      <Box overflow="hidden">
        <Image
          src={imgSrc}
          _hover={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
        />
      </Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Box p="5">
          <Text fontWeight="semibold" fontSize="md">{cleanName(name)}</Text>
          <Text fontWeight="semibold" fontSize="md">
            {price}
            {' '}
            SOL
          </Text>
        </Box>
        <Box p="5">
          <Button bg="primary" color="white" _hover={colorMode === 'dark' ? { border: '1px', borderColor: 'whiteAlpha.600' } : { border: '1px', borderColor: 'blackAlpha.600' }}>
            Buy
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
