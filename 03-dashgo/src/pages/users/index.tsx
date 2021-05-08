import { 
  Box, 
  Button, 
  Checkbox, 
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr, 
  Spinner,
  useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from 'react-query';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";

export default function UserList() {
  // users = nome da chave qeu será armazenada no cache
  const { data, isLoading, isFetching, error } = useQuery('users', async () => {
    const { data } = await api.get('users')

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }) 
      };
    });

    return users;
  }, {
    staleTime: 1000 * 5, // seconds 
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const renderButton = () => (
    <Button
      as='a'
      size='sm'
      fontSize='sm'
      colorScheme='purple'
      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
      cursor='pointer'
    >
      Editar
    </Button>
  );

  const renderTable = () => (
    <>
      <Table colorScheme='whiteAlpha'>
        <Thead>
          <Tr>
            <Th px={['4', '4','6']} color='gray.300' width='8'>
              <Checkbox colorScheme='pink' />
            </Th>
            <Th>Usuário</Th>
            { isWideVersion && <Th>Data de cadastro</Th> }
            <Th width='8'></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map(user => {
            return (
              <Tr key={user.id}>
                <Td px={['4', '4','6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>{user.name}</Text>
                    <Text fontSize='small' color='gray.300'>{user.email}</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>{user.createdAt}</Td>}
                <Td>
                { isWideVersion && renderButton() }
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Pagination />
    </>
  );

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
              
              { !isLoading && isFetching  && <Spinner size='sm' color='gray.500' ml='4' />}
            </Heading>

            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                cursor='pointer'
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          { 
            isLoading ? (
                <Flex justify='center'>
                  <Spinner />
                </Flex>
            ) : error ?  (
              <Flex justify='center'>
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : renderTable()
          }
        </Box>
      </Flex>
    </Box>
  );
}