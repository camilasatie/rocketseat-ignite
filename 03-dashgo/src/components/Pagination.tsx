import { Stack, Button, Box } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      spacing='6'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <Button 
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='pink'
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button 
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500',
            cursor: 'pointer',
          }}
        >
          2
        </Button>
        <Button 
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500',
            cursor: 'pointer',
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
}