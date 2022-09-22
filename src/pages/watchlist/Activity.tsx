import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Box, Spinner,
  Flex, Image, Text, Table, Th, Thead, Tbody, Tfoot, Tr, Td, TableContainer,
} from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { FaTag, FaDollarSign } from 'react-icons/fa';
import { ActivityGrid } from '../../components/ActivityGrid';
import { AppContext } from '../../context/AppContext';

export default function Activity() {
  const { watchList, colorMode, hyperClient } = useContext(AppContext);
  const [activityData, setActivityData] = useState<any>();

  useEffect(() => {
    const fetchActivitty = async () => {
      await hyperClient.getProjectHistory({
        condition: {
          projects: [{ project_id: 'okaybears' }],
          actionTypes: ['LISTING', 'BID'],
        },
        paginationInfo: {
          page_size: 10,
        },
      }).then((res: any) => setActivityData(res.getProjectHistory.market_place_snapshots));
    };
    fetchActivitty();
  }, [watchList]);

  console.log(activityData);

  return (
    <Box>
      {activityData === undefined ? (
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
        <Tabs variant="unstyled" colorScheme="primary">
          <TabList gap="3">
            <Tab
              border="1px"
              borderColor="gray.500"
              color="gray.500"
              _hover={{ bg: 'primary75', color: 'white' }}
              _selected={{ bg: 'primary', color: 'white' }}
              borderRadius="md"
              alignItems="center"
              gap="2"
            >
              <FaTag />
              Listings
            </Tab>
            <Tab
              border="1px"
              borderColor="gray.500"
              color="gray.500"
              _hover={{ bg: 'primary75', color: 'white' }}
              _selected={{ bg: 'primary', color: 'white' }}
              borderRadius="md"
              alignItems="center"
              gap="2"
            >
              <FaDollarSign />
              Bids
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
              <ActivityGrid
                activityData={activityData.filter((activity: any) => activity.market_place_state.type === 'LISTING')}
              />
            </TabPanel>
            <TabPanel padding="0">
              <ActivityGrid
                activityData={activityData.filter((activity: any) => activity.market_place_state.type === 'BID')}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
}
