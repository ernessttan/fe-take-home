import {
  Flex, Image, Text, Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

type ProjectProps = {
  projectId: string,
  imgSrc: string,
  displayName: string,
  floorPrice: number,
}

export const FeaturedProjectCard: FC<ProjectProps> = ({
  imgSrc, displayName, floorPrice, projectId,
}) => {
  return (
    <NextLink href={`/project/${projectId}`}>
      <Link
        w={{ base: '100%', md: '50%', lg: '20%' }}
        h="400px"
        flexShrink="0"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
        _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out' }}
        boxShadow="lg"
      >
        <Image src={imgSrc} w="100%" h="100%" objectFit="cover" />
        <Flex w="100%" h="100%" flexDirection="column" justifyContent="flex-end" bg="linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)" color="white" position="absolute" bottom="0">
          <Flex flexDirection="column" p="5" textShadow="0 2px 3px rgba(0, 0, 0, 0.3)" fontSize="lg" fontWeight="bold" zIndex="10">
            <Text>{displayName}</Text>
            <Text>
              Floor:
              {floorPrice.toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};
