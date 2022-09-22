import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {
  Box,
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
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
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
    if (pid) {
      fetchProject();
    }
  }, [pid]);

  useEffect(() => {
    if (watchList.includes(pid)) {
      setIsWatched(true);
    } else {
      setIsWatched(false);
    }
  }, [watchList]);

  return project && (
    <>
      <Header />
      <Box height="100vh" p="10">
        <Information
          projectId={project.project_id}
          imageSrc={project.project.img_url}
          displayName={project.project.display_name}
          floorPrice={project.floor_price}
          oneDayVolume={project.one_day_volume}
          percentListed={project.percent_listed}
          rank={project.rank}
          twitter={project.project.twitter}
          website={project.project.website}
          discord={project.project.discord}
          isWatched={isWatched}
          setWatchList={setWatchList}
          colorMode={colorMode}
        />
      </Box>
    </>
  );
}
