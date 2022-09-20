import { Flex, useColorMode, Box, Text, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";
import { AppContext } from "../context/AppContext";


const Index = () => {
  const { hyperClient } = useContext(AppContext);
  const [projects, setProjects] = useState([]);

  const enum SortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}

  useEffect(() => {
    const fetchProjects = async () => {
      await hyperClient.getProjects({
        orderBy: {
          field_name: 'volume_1day',
          sort_order: SortOrderEnum.Desc
        }
      }).then((res) => setProjects(res.getProjectStats.project_stats));
    };
    fetchProjects();
  }, []);

  return projects && (
    <>
      <Header />
      <Container height="100vh" py='10px'>
        <Box fontSize="2xl" fontWeight="bold">
          <Text>Explore, Analyze and Sell NFTs</Text>
        </Box>
        <Flex w='100%' p='4' display="flex" alignItems="center" overflowX='scroll' gap='5'>
          { projects.map((project: any) => (
            <FeaturedProjectCard data={project} type="project" key={project.project_id}  />
          ))}
        </Flex>
      </Container>
    </>
   
  );
};

export default Index;
