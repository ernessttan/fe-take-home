import { Flex, useColorMode } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";


const Index = () => {
  // // Get newest listings 
  // hyperClient.getProjects({
  //   orderBy: {
  //     field_name: 'volume_1day',
  //     sort_order: SortOrderEnum.Desc
  //   }
  // }).then((res) => console.log(res));

  return (
    <>
      <Header />
      <Container height="100vh">
      {/* Using our Hyperspace data, build out something cool for us to review together! */}
      </Container>
    </>
   
  );
};

export default Index;
