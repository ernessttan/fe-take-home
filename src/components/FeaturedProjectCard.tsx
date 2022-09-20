import { Flex, Image, Text, Link } from "@chakra-ui/react";

export const FeaturedProjectCard = (props: any) => {
    const { data } = props;
    console.log(data);
    return (
        <Link w={{ base: '100%', md: '50%', lg: '30%'}} flexShrink='0' borderRadius="lg" overflow="hidden" position="relative">
            <Flex>
                <Image src={data.project.img_url} />
                <Flex w="100%" h="100%" flexDirection="column" justifyContent="flex-end" bg="linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)" color="white" position="absolute">
                <Flex flexDirection="column" p="5" textShadow="0 2px 3px rgba(0, 0, 0, 0.3)" fontSize="lg" fontWeight="bold">
                    <Text>{data.project.display_name}</Text>
                    <Text>Floor: {data.floor_price}</Text>
                </Flex>
                </Flex>
            </Flex>  
        </Link>
       
    );
};