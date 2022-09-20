import { Flex, FlexProps } from '@chakra-ui/react';

export function Container(props: FlexProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgColor="siteBackground"
      color="black"
      _dark={{
        color: 'white',
      }}
      transition="all 0.15s ease-out"
      {...props}
    />
  );
}
