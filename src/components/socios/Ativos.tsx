import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Checkbox,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tag,
  TagLabel,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { api } from "../../services/api";

import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";
import { useQuery } from "react-query";

import bx from "../../images/bx.svg";
import send from "../../images/send.svg";
import pencil from "../../images/pencil.svg";
import add from "../../images/person-plus.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiFilter } from "react-icons/fi";
import { Key, useState } from "react";
import { Pagination } from "../Pagination";
import { string } from "yup";

function Ativos() {
  const [page, setpage] = useState(1);

  //get dos dados totais
  const fetchActiveUsers = () => {
    return api.get("Socios/ListSocioAtivo");
  };

  const { data, isLoading, error  } = useQuery(
    "Socios/ListSocioAtivo",
    fetchActiveUsers,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: "always",
    }
  );
  //console.log(error);

  // const filterResult =
  //(socios) => {
  // const result = data?.data.Socios.filter((curData) => {
  //  return curData.voluntario === socios;
  // });
  // };

  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Sidebar />

        <Flex justify="space-between" ml={274} mb={8} mt={6}>
          <Text fontWeight="bold">Sócios</Text>
          {/**Botao Novo registo */}
          <Button
            as="a"
            href="/novoRegisto"
            bg="blue.300"
            color="white.offWhite"
            fontSize="sm"
            borderRadius="8"
            mr={20}
          >
            <Image mr={2} src={add} boxSize={5} />
            Novo Registo
          </Button>
        </Flex>

        <Box
          flex="1"
          borderRadius={6}
          boxShadow="lg"
          bg="white.offWhite"
          p="8"
          mb="10"
          ml={274}
          mr={6}
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="bold">
              Socios Ativo({data?.data.Socios.length})
            </Heading>

            {/**Filtros*/}
            <Menu isLazy>
              <MenuButton
                as={Button}
                boxShadow="lg"
                justify="space-between"
                color="gray.400"
                leftIcon={<FiFilter />}
                rightIcon={<ChevronDownIcon fontSize="2xl" />}
                _expanded={{ bg: "gray.400", color: "white.offWhite" }}
              >
                <Text fontSize="md">Filtros</Text>
              </MenuButton>
              <MenuList boxShadow="lg">
                <MenuItem>Todos</MenuItem>
                <MenuItem>Pagamentos em atraso</MenuItem>
                <MenuItem>Pagamentos Liquidados</MenuItem>
                {/**  <MenuItem onClick={() => filterResult("true")}>Voluntarios</MenuItem>*/}
                {/**<MenuItem onClick={() => filterResult("false")}>Não Voluntarios</MenuItem>*/}
                <MenuItem>Voluntarios</MenuItem>
                <MenuItem>Não Voluntarios</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha a obter os Dados.</Text>
            </Flex>
          ) : (
            <Table variant="striped" colorScheme="blackAlpha">
              <Thead>
                <Tr bg="gray.250">
                  <Th color="white.offWhite">NOME</Th>
                  <Th color="white.offWhite">EMAIL</Th>
                  <Th color="white.offWhite">VOLUNTÁRIO</Th>
                  <Th color="white.offWhite">DATA LIMITE</Th>
                  <Th color="white.offWhite">ÚLTIMO PAGAMENTO</Th>
                  <Th color="white.offWhite"></Th>
                </Tr>
              </Thead>

              <Tbody>
                {data?.data.Socios.map(
                  (socio: {
                    id: Key | null | undefined;
                    nome: string;
                    email: string;
                    data_limite: Date;
                    ultimo_pagamento: Date;
                    ativo: boolean;
                    voluntario: boolean;
                  }) => {
                    return (
                      <Tr key={socio.id}>
                        <Td fontSize="sm">{socio.nome}</Td>
                        <Td fontSize="sm">{socio.email}</Td>
                        <Td>
                          {socio.voluntario ? (
                            <Tag
                              size="md"
                              w="50%"
                              justifyContent="center"
                              alignItems="center"
                              borderRadius="full"
                              variant="solid"
                              colorScheme="green"
                              opacity="0.5"
                            >
                              <TagLabel color="#96F686">Sim</TagLabel>
                            </Tag>
                          ) : (
                            <Tag
                              size="md"
                              w="50%"
                              justifyContent="center"
                              alignItems="center"
                              borderRadius="full"
                              variant="solid"
                              colorScheme="red"
                              opacity="0.5"
                            >
                              <TagLabel color="#fff">Não</TagLabel>
                            </Tag>
                          )}
                        </Td>

                        <Td fontSize="sm" color="#767676">
                          {new Date(socio.data_limite).toLocaleDateString(
                            "es-CL",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </Td>

                        <Td fontSize="sm">
                          {new Date(socio.ultimo_pagamento).toLocaleDateString(
                            "es-CL",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </Td>
                        <Td>
                          <Menu isLazy>
                            <MenuButton _focus={{ boxShadow: "none" }}>
                              <Text fontSize="2xl">...</Text>
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                as={RouterLink}
                                minH="48px"
                                to={{ pathname: `/Socios/FindOne/${socio.id}` }}
                                _focus={{ boxShadow: "none" }}
                              >
                                <Image
                                  boxSize="1rem"
                                  src={pencil}
                                  alt="Fluffybuns the destroyer"
                                  mr="12px"
                                />
                                Editar Perfil
                              </MenuItem>

                              <MenuItem
                                as="button"
                                minH="48px"
                                _focus={{ boxShadow: "none" }}
                              >
                                <Image
                                  boxSize="1rem"
                                  src={send}
                                  alt="Fluffybuns the destroyer"
                                  mr="12px"
                                />
                                Enviar Email
                              </MenuItem>
                              <MenuItem
                                minH="48px"
                                _focus={{ boxShadow: "none" }}
                              >
                                <Image
                                  boxSize="1rem"
                                  src={bx}
                                  alt="Fluffybuns the destroyer"
                                  mr="12px"
                                />
                                Alterar Estado
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                    );
                  }
                )}
              </Tbody>
            </Table>
          )}

          <Pagination
            totalCountOfRegisters={data?.data.length}
            currentPage={page}
            onPageChange={setpage}
          />
        </Box>
      </Flex>
    </>
  );
}

export default Ativos;
