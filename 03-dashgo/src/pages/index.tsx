import { Input } from '../components/Form/Input';
import { Flex, Button, Stack } from '@chakra-ui/react';

export default function SignIn() {
  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex 
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDirection='column'
      >
        <Stack spacing='4'>
          <Input name='email' type='email' label='Email' />
          <Input name='password' type='password' label='Password' />
        </Stack>
        <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button> 
      </Flex>

    </Flex>
  )
}
