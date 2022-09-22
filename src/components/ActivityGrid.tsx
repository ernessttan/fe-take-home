import { FC, useContext } from 'react';
import {
  TableContainer, Thead, Tr, Th, Td, Tbody, Tfoot, Table, Flex, Text, Image, Link, Box,
} from '@chakra-ui/react';
import { FaTag, FaDollarSign } from 'react-icons/fa';
import fromUnixTime from 'date-fns/fromUnixTime';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { AppContext } from '../context/AppContext';

type ActivityGridProps = {
    activityData: any,
}

export const ActivityGrid: FC<ActivityGridProps> = ({ activityData }) => {
  const { colorMode } = useContext(AppContext);

  return (
    <TableContainer border="1px" borderRadius="lg" my="10" flexGrow="1">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Amount</Th>
            <Th>User</Th>
            <Th>When</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activityData.map((activity: any) => (
            <Tr key={activity.token_address}>
              <Td>
                <Flex alignItems="center" justifyContent="flex-start" gap="3">
                  <Image src={activity.meta_data_img} h="16" w="16" borderRadius="md" />
                  <Text>{activity.name}</Text>
                </Flex>
              </Td>
              <Td>
                <Text>
                  {activity.market_place_state.price}
                  {' '}
                  SOL
                </Text>
              </Td>
              <Td>
                <Link>
                  {activity.market_place_state.type === 'LISTING' && activity.market_place_state.seller_address.slice(0, 5)}
                  {activity.market_place_state.type === 'BID' && activity.market_place_state.buyer_address.slice(0, 5)}
                </Link>
              </Td>
              <Td>
                <Text>
                  {formatDistanceToNow(fromUnixTime(activity.market_place_state.block_timestamp))}
                  {' '}
                  ago
                </Text>
              </Td>
              <Td>
                {activity.market_place_state.type === 'LISTING' && (
                  <Flex
                    w="28"
                    p="2"
                    alignItems="center"
                    justifyContent="center"
                    gap="1"
                    borderRadius="2xl"
                    border="1px"
                    borderColor="yellow.200"
                    bg={colorMode === 'dark' ? 'transparent' : 'yellow.400'}
                    color={colorMode === 'dark' ? 'yellow.200' : 'white'}
                  >
                    <FaTag />
                    <Text>Listing</Text>
                  </Flex>
                )}
                {activity.market_place_state.type === 'BID' && (
                  <Flex
                    w="20"
                    py="2"
                    alignItems="center"
                    justifyContent="center"
                    gap="1"
                    borderRadius="2xl"
                    border="1px"
                    borderColor="green.200"
                    bg={colorMode === 'dark' ? 'transparent' : 'green.400'}
                    color={colorMode === 'dark' ? 'green.200' : 'white'}
                  >
                    <FaDollarSign />
                    <Text>Bid</Text>
                  </Flex>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot />
      </Table>
    </TableContainer>
  );
};
