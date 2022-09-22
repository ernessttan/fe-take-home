import {
  Flex, Heading, Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import Overview from './Overview';
import Activity from './Activity';

export default function WatchList() {
  return (
    <>
      <Header />
      <Flex flexDirection="column" p="5" h="100%">
        <Heading as="h1">My Watchlist</Heading>
        <Tabs my="5">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Activity</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px="2" p="5">
              <Overview />
            </TabPanel>
            <TabPanel px="2" py="5">
              <Activity />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
