import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Box, Spinner,
  Flex, Heading,
} from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { FaTag, FaDollarSign } from 'react-icons/fa';
import { ActivityGrid } from '../../components/ActivityGrid';
import { AppContext } from '../../context/AppContext';

export default function Activity() {
  const { watchList, hyperClient, colorMode } = useContext(AppContext);
  const [activityData, setActivityData] = useState<any>();

  useEffect(() => {
    const fetchActivity = async () => {
      await hyperClient.getProjectHistory({
        condition: {
          projects: watchList,
          actionTypes: ['LISTING', 'BID'],
        },
        paginationInfo: {
          page_size: 5,
        },
      }).then((res: any) => setActivityData(res.getProjectHistory.market_place_snapshots));
    };
    if (watchList.length > 0) {
      fetchActivity();
    }
  }, [watchList]);

  return (
    <Box>
      {
        watchList.length === 0 ? (
          <Flex justifyContent="center" alignItems="center">
            <Heading as="h1">No Collections Watched</Heading>
          </Flex>
        ) : activityData === undefined ? (
          <Flex justifyContent="center" alignItems="center">
            <Spinner
              thickness="4px"
              speed="0.5s"
              emptyColor="gray.200"
              color="primary"
              size="xl"
            />
          </Flex>
        ) : activityData ? (
          <Tabs variant="unstyled" colorScheme="primary">
            <TabList gap="3">
              <Tab
                border="1px"
                borderColor="gray.500"
                color="gray.500"
                _hover={{
                  bg: 'primary75', color: 'white', borderColor: 'primary75', border: '1px',
                }}
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
        ) : null
}
    </Box>
  );
}
