import {
  useEffect, useState, useContext,
} from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Th,
  Image,
  Text,
  TableContainer,
  Flex,
  Spinner,
  Box,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';

export default function Overview() {
  const { watchList, hyperClient } = useContext(AppContext);
  const [overviewData, setoverviewData] = useState<any>();

  useEffect(() => {
    const fetchoverview = async () => {
      await hyperClient.getProjects({
        condition: {
          projectIds: watchList,
        },
      }).then((res: any) => setoverviewData(res.getProjectStats.project_stats));
    };
    fetchoverview();
  }, [watchList]);

  return (
    <Box>
      { overviewData === undefined ? (
        <Flex justifyContent="center" alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.5s"
            emptyColor="gray.200"
            color="primary"
            size="xl"
          />
        </Flex>
      ) : (
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
              {overviewData.map((project: any) => (
                <Tr key={project.project_id}>
                  <Td>
                    <Flex alignItems="center" justifyContent="flex-start" gap="3">
                      <Image src={project.project.img_url} h="10" w="10" borderRadius="3xl" />
                      <Text>{project.project.displayName}</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Text>
                      {project.floor_price}
                      {' '}
                      SOL
                    </Text>
                  </Td>
                  <Td>
                    <Text>{project.volume_1day}</Text>
                  </Td>
                  <Td>
                    <Text>
                      {Math.round(project.percentage_of_token_listed * 100)}
                      {' '}
                      %
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot />
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
