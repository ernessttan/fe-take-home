import {
  Tr, Td, Box, Image, Text, Flex, Heading,
} from '@chakra-ui/react';

export default function Entry(props: any) {
  const { entry } = props;
  return (
    <Tr>
      <Td>
        <Flex alignItems="center" justifyContent="flex-start" gap="3">
          <Image src={entry.project.img_url} h="10" w="10" borderRadius="3xl" />
          <Text>{entry.project.display_name}</Text>
        </Flex>
      </Td>
      <Td>
        <Text>
          {entry.floor_price}
          {' '}
          SOL
        </Text>
      </Td>
      <Td>
        <Text>{entry.volume_1day}</Text>
      </Td>
      <Td>
        <Text>
          {Math.round(entry.percentage_of_token_listed * 100)}
          {' '}
          %
        </Text>
      </Td>
    </Tr>
  );
}
