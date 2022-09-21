import {
  Flex, Box, Text, IconButton, Heading,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  useContext, useEffect, useState,
} from 'react';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { FeaturedProjectCard } from '../components/FeaturedProjectCard';
import { AppContext } from '../context/AppContext';

function Index() {
  const { hyperClient, colorMode } = useContext(AppContext);
  const [projects, setProjects] = useState([]);

  const enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC'
  }

  useEffect(() => {
    const fetchProjects = async () => {
      await hyperClient.getProjects({
        orderBy: {
          field_name: 'volume_1day',
          sort_order: SortOrderEnum.Desc,
        },
      }).then((res: any) => setProjects(res.getProjectStats.project_stats));
    };
    fetchProjects();
  }, []);

  const handleScroll = (e: any) => {
    const { value } = e.currentTarget;
    const featuredCarousel = document.getElementById('featuredCarousel');
    if (value === 'left') {
      featuredCarousel.scrollLeft -= 500;
    } else {
      featuredCarousel.scrollLeft += 500;
    }
  };

  return projects && (
    <>
      <Header />
      <Container height="100vh" p="10">
        <Box py="5">
          <Heading as="h1">Explore, Analyze and Sell NFTs</Heading>
        </Box>
        <Box position="relative" w="100%">
          <IconButton
            display={{ base: 'none', md: 'block' }}
            bg={colorMode === 'dark' ? 'blackAlpha.700' : 'whiteAlpha.700'}
            _hover={colorMode === 'dark' ? { bg: 'black' } : { bg: 'white' }}
            aria-label="Scroll Left"
            position="absolute"
            left="0"
            top="50%"
            marginTop="-30px"
            icon={<ChevronLeftIcon />}
            size="lg"
            zIndex="10"
            onClick={handleScroll}
            value="left"
          />
          <IconButton
            display={{ base: 'none', md: 'block' }}
            bg={colorMode === 'dark' ? 'blackAlpha.700' : 'whiteAlpha.700'}
            _hover={colorMode === 'dark' ? { bg: 'black' } : { bg: 'white' }}
            aria-label="Scroll Right"
            position="absolute"
            right="0"
            top="50%"
            marginTop="-30px"
            icon={<ChevronRightIcon />}
            size="lg"
            zIndex="10"
            onClick={handleScroll}
            value="right"
          />
          <Flex
            id="featuredCarousel"
            w="100%"
            py="4"
            display="flex"
            alignItems="center"
            overflowX="scroll"
            scrollBehavior="smooth"
            gap="5"
            position="relative"
            sx={{
              '@media screen and (min-width: 30rem)': {
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            }}
          >
            { projects.map((project: any) => (
              <FeaturedProjectCard data={project} type="project" key={project.project_id} />
            ))}
          </Flex>
        </Box>
      </Container>
    </>

  );
}

export default Index;
