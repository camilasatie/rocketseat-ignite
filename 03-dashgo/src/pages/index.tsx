import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex, Button, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatório'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handelSignIn: SubmitHandler<SignInFormData> = (data) => {
    console.log(data)
  }

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
        onSubmit={handleSubmit(handelSignIn)}
      >
        <Stack spacing='4'>
          <Input 
            name='email' 
            type='email' 
            label='Email'
            error={errors.email}
            {...register('email')}
          />
          <Input 
            name='password' 
            type='password' 
            label='Senha' 
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button> 
      </Flex>

    </Flex>
  )
}
