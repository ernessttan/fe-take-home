import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Box,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import { Header } from '../../components/Header';
import { Information } from './Information';

export default function Project() {
  const router = useRouter();
  const { pid } = router.query;
  const { colorMode, hyperClient, setWatchList } = useContext(AppContext);
  const [project, setProject] = useState();

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

  console.log(project);

  return project && (
    <>
      <Header />
      <Box height="100vh" p="10">
        <Information project={project} colorMode={colorMode} />
      </Box>
    </>
  );
}
