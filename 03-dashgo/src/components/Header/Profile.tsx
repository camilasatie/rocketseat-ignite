import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Camila Satie</Text>
        <Text 
          color='gray-300' 
          fontSize='small'
        >
          camilasatie.dev@gmail.com
        </Text>
      </Box>

      <Avatar 
        size='md'
        name='Camila Satie'
        src='https://github.com/camilasatie.png'
      />
    </Flex>
  )
}