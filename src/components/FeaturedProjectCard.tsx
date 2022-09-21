import {
  Flex, Image, Text, Link,
} from '@chakra-ui/react';

export function FeaturedProjectCard(props: any) {
  const { data } = props;
  return (
    <Link
      href={`/project/${data.project_id}`}
      w={{ base: '100%', md: '50%', lg: '20%' }}
      h="400px"
      flexShrink="0"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out' }}
    >
      <Image src={data.project.img_url} w="100%" h="100%" objectFit="cover" />
      <Flex w="100%" h="100%" flexDirection="column" justifyContent="flex-end" bg="linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)" color="white" position="absolute" bottom="0">
        <Flex flexDirection="column" p="5" textShadow="0 2px 3px rgba(0, 0, 0, 0.3)" fontSize="lg" fontWeight="bold" zIndex="10">
          <Text>{data.project.display_name}</Text>
          <Text>
            Floor:
            {data.floor_price.toFixed(2)}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
