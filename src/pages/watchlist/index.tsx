import { useContext, useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import { Header } from '../../components/Header';
import Entry from './Entry';

export default function WatchList() {
  const { watchList, hyperClient } = useContext(AppContext);
  const [watchListData, setWatchListData] = useState([]);

  useEffect(() => {
    const fetchWatchList = async () => {
      await hyperClient.getProjects({
        condition: {
          projectIds: watchList,
        },
      }).then((res: any) => setWatchListData(res.getProjectStats.project_stats));
    };
    fetchWatchList();
  }, [watchList]);

  return watchListData && (
    <>
      <Header />
      <Flex flexDirection="column" p="10" h="100%">
        <Heading as="h1">My Watchlist</Heading>
        <TableContainer border="1px" borderRadius="lg" my="10" flexGrow="1">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Collection</Th>
                <Th>Floor Price</Th>
                <Th>1 Day Volume</Th>
                <Th>Listed</Th>
              </Tr>
            </Thead>
            <Tbody>
              {watchListData.map((entry: any) => (
                <Entry entry={entry} />
              ))}
            </Tbody>
            <Tfoot />
          </Table>
        </TableContainer>
      </Flex>
    </>,
  );
}
