import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {

  const renderInfoBox = () => (
    <Box mr='4' textAlign='right'>
      <Text>Camila Satie</Text>
      <Text 
        color='gray-300' 
        fontSize='small'
      >
        camilasatie.dev@gmail.com
      </Text>
    </Box>
  )

  return (
    <Flex align='center'>
    { showProfileData  && renderInfoBox() }

      <Avatar 
        size='md'
        name='Camila Satie'
        src='https://github.com/camilasatie.png'
      />
    </Flex>
  )
}