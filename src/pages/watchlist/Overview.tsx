import {
  useEffect, useState, useContext,
} from 'react';
import {
  Table, Thead, Tbody, Tfoot, Tr, Td, Th, Image, Text, useToast,
  TableContainer, Flex, Spinner, Box, Heading, IconButton,
} from '@chakra-ui/react';
import { ViewOffIcon } from '@chakra-ui/icons';
import { AppContext } from '../../context/AppContext';

export default function Overview() {
  const toast = useToast();
  const {
    watchList, setWatchList, hyperClient, colorMode,
  } = useContext(AppContext);
  const [overviewData, setoverviewData] = useState<any>();

  useEffect(() => {
    const idArr = watchList.map((item: any) => item.project_id);
    const fetchoverview = async () => {
      await hyperClient.getProjects({
        condition: {
          projectIds: idArr,
        },
      }).then((res: any) => setoverviewData(res.getProjectStats.project_stats));
    };
    if (watchList.length > 0) {
      fetchoverview();
    }
  }, [watchList]);

  const removeProject = (e: any) => {
    setWatchList((prev: any) => (
      prev.filter((item: any) => item.project_id !== e.currentTarget.value)));
    toast({
      title: 'Removed from Watchlist',
      description: 'You can no longer view this project in your watchlist',
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <Box>
      {
        watchList.length === 0 ? (
          <Flex justifyContent="center" alignItems="center">
            <Heading as="h1">No Collections Watched</Heading>
          </Flex>
        ) : overviewData === undefined ? (
          <Flex justifyContent="center" alignItems="center">
            <Spinner
              thickness="4px"
              speed="0.5s"
              emptyColor="gray.200"
              color="primary"
              size="xl"
            />
          </Flex>
        ) : overviewData ? (
          <TableContainer border="1px" borderRadius="lg" my="10" flexGrow="1">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Collection</Th>
                  <Th>Floor Price</Th>
                  <Th>1 Day Volume</Th>
                  <Th>Listed</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {overviewData.map((project: any) => (
                  <Tr key={project.project_id}>
                    <Td>
                      <Flex alignItems="center" justifyContent="flex-start" gap="3">
                        <Image src={project.project.img_url} h="10" w="10" borderRadius="3xl" />
                        <Text>{project.project.display_name}</Text>
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
                    <Td>
                      <IconButton
                        aria-label="Unwatch Collection"
                        _hover={{ bg: 'primary75', color: 'white' }}
                        color="white"
                        colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
                        icon={<ViewOffIcon />}
                        value={project.project_id}
                        onClick={removeProject}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot />
            </Table>
          </TableContainer>
        ) : null
}
    </Box>
  );
}
