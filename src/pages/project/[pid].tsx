import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import { Header } from '../../components/Header';
import { Information } from './Information';

export default function Project() {
  const router = useRouter();
  const { pid } = router.query;
  const {
    colorMode, hyperClient, setWatchList, watchList,
  } = useContext(AppContext);
  const [project, setProject] = useState();
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
          project={project}
          colorMode={colorMode}
          setWatchList={setWatchList}
          isWatched={isWatched}
        />
      </Box>
    </>
  );
}
