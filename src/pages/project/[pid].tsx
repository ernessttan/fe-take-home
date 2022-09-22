import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {
  Grid, Image, Box, Text, useBoolean,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import { Header } from '../../components/Header';
import Information from './Information';

export default function Project() {
  const router = useRouter();
  const { pid } = router.query;
  const {
    colorMode, hyperClient, setWatchList, watchList,
  } = useContext(AppContext);

  const [project, setProject] = useState<any>();
  const [tokens, setTokens] = useState<any>();
  const [isWatched, setIsWatched] = useState(false);

  const fetchProject = async () => {
    await hyperClient.searchProjectByName({
      condition: {
        matchName: {
          operation: 'EXACT',
          value: pid,
        },
      },
    }).then((res: any) => setProject(res.getProjectStatByName.project_stats[0]));
  };

  const fetchTokens = async () => {
    await hyperClient.getMarketplaceSnapshot({
      condition: {
        projects: [{ project_id: pid }],
      },
      orderBy: {
        field_name: 'lowest_listing_price',
        sort_order: 'DESC',
      },
      paginationInfo: {
        page_size: 16,
      },
    }).then((res: any) => setTokens(res.getMarketPlaceSnapshots.market_place_snapshots));
  };

  useEffect(() => {
    if (pid) {
      fetchProject();
      fetchTokens();
    }
  }, [pid]);

  useEffect(() => {
    const isOnList = watchList.find((item: any) => item.project_id === project?.project_id);
    if (isOnList) {
      setIsWatched(true);
    } else {
      setIsWatched(false);
    }
  }, [project, watchList]);

  const cleanName = (name: string) => {
    console.log(name);
    const poundIndex = name.indexOf('#');
    const cleaned = name.slice(poundIndex, name.length - 1 + 1);
    return cleaned;
  };

  return project && (
    <>
      <Header />
      <Box height="100%" p="10">
        <Information
          projectId={project.project_id}
          imageSrc={project.project.img_url}
          displayName={project.project.display_name}
          floorPrice={project.floor_price}
          oneDayVolume={project.volume_1day}
          percentListed={project.percentage_of_token_listed}
          rank={project.rank}
          twitter={project.project.twitter}
          website={project.project.website}
          discord={project.project.discord}
          isWatched={isWatched}
          setWatchList={setWatchList}
          colorMode={colorMode}
        />
        <Grid py="10" gap="5" templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}>
          {tokens?.map((token: any) => (
            <Box
              key={token.token_address}
              boxShadow="md"
              border="1px"
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              _hover={colorMode === 'dark' ? { bg: 'whiteAlpha.200' } : { bg: 'blackAlpha.200' }}
            >
              <Box overflow="hidden">
                <Image
                  src={token.meta_data_img}
                  _hover={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
                />
              </Box>
              <Box p="5">
                <Text fontWeight="semibold" fontSize="md">{cleanName(token.name)}</Text>
                <Text fontWeight="semibold" fontSize="md">
                  {token.lowest_listing_mpa.price}
                  {' '}
                  SOL
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}
