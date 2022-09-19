import {
  Flex,
  SimpleGrid,
  Text,
  Box,
  theme,
  Stack,
  Heading,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Image,
  Spinner,
  TagLabel,
  Tag,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Key, useState } from "react";

import Header from "../Header/index";
import Sidebar from "../Sidebar/Sidebar";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import team from "../../images/team2.svg";
import positivo from "../../images/positivo.svg";
import wallet from "../../images/wallet2.svg";
import { api } from "../../services/api";

function Dashboard() {
  //get dos dados pagamentos em atraso
  const fetchActiveUsers = () => {
    return api.get("Socios/ListSocioNaoPago");
  };

  const { data, isLoading, error, isFetching } = useQuery(
    "Socios/ListSocioNaoPago",
    fetchActiveUsers,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: "always",
    }
  );
  var pagamentoAtrasoTotal = data?.data.Socios.length;

  //get Socios Totais
  const response = useQuery("Socios", async () => {
    const apiResponse = await api.get("Socios");

    return apiResponse.data.Socios;
  });
  var sociosTotal = response?.data;

  //data
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  //get socios ativos
  const sociosAtivosNumero = useQuery("Socios/ListSocioAtivo", async () => {
    const apiResponse = await api.get("Socios/ListSocioAtivo");

    return apiResponse.data.Socios;
  });
  //console.log(sociosAtivosNumero.data);
  var sociosAtivosData = sociosAtivosNumero.data;

  //get socios Inativos
  const sociosInativosNumero = useQuery(
    "Socios/ListSocioNaoAtivo",
    async () => {
      const apiResponse = await api.get("Socios/ListSocioNaoAtivo");

      return apiResponse.data.Socios;
    }
  );
  var sociosInativosData = sociosInativosNumero.data;

  //garfico realtime dados
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    tooltip: {
      enabled: false,
    },
    colors: ['#96F687', '#DE4B4B'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    
  };
  
  const series = [
    {name: 'Ativos', data: [31, 120, 10, 18, 109]},
    {name: 'Inativos', data: [29, 90, 20, 100, 20]}
  
  ];

  // grafico circular dados
  const config = {
    series: [72, 28],
    options: {
      labels: ["Não", "Sim"],
      colors: ["#1D5175", "#B9B9B9"],
    },
  };

  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Sidebar />

        <Box flex="1" borderRadius={6} mb="10" ml={254} mr={6} mt={4}>
          <SimpleGrid flex="1" gap="4">
            <Stack spacing="4" mx="8">
              <Text fontSize="lg" mb="4" fontWeight="bold">
                Dashboard
              </Text>
              {/*Summary */}

              <Flex justify="space-between">
                <Box
                  bg="white.offWhite"
                  p="6"
                  shadow="lg"
                  borderRadius="6"
                  w="25%"
                  h="170"
                >
                  <HStack>
                    <Box borderRadius="full" bg="blue.300" p="4">
                      <Image src={team} boxSize="12" />
                    </Box>
                    <Flex direction="column">
                      <Text fontSize="md" fontWeight="bold" color="gray.300">
                        Número Total de Sócios
                      </Text>
                      <Text fontSize="4xl" fontWeight="bold">
                        {(sociosTotal || []).length}
                      </Text>
                      <HStack>
                        <Image src={positivo} boxSize="4" fontWeight="bold" />
                        <Text color="#96F687" fontSize="md">
                          4,7% mês anterior
                        </Text>
                      </HStack>
                    </Flex>
                  </HStack>
                </Box>

                <Box
                  bg="white.offWhite"
                  p="6"
                  shadow="lg"
                  borderRadius="6"
                  w="25%"
                  h="170"
                >
                  <HStack>
                    <Box borderRadius="full" bg="blue.300" p="4">
                      <Image src={wallet} boxSize="12" />
                    </Box>
                    <Flex direction="column">
                      <Text fontSize="md" fontWeight="bold" color="gray.300">
                        Valor Mensal Angariado
                      </Text>
                      <Text fontSize="4xl" fontWeight="bold">
                        12 500€
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="gray.300">
                        a partir de{" "}
                        {firstDay.toLocaleDateString("es-CL", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </Text>
                    </Flex>
                  </HStack>
                </Box>

                <Box
                  bg="white.offWhite"
                  p="6"
                  shadow="lg"
                  borderRadius="6"
                  w="25%"
                  h="170"
                >
                  <HStack>
                    <Box borderRadius="full" bg="blue.300" p="4">
                      <Image src={wallet} boxSize="12" />
                    </Box>
                    <Flex direction="column">
                      <Text fontSize="md" fontWeight="bold" color="gray.300">
                        Valor Cotas em Atraso
                      </Text>
                      <Text fontSize="4xl" fontWeight="bold">
                        1 500€
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="gray.300">
                        por liquidar
                      </Text>
                    </Flex>
                  </HStack>
                </Box>
              </Flex>

              {/*Graficos */}
              <HStack justify="space-between">
                <Box
                  //width={853}
                  //height={377}
                  p="8"
                  bg="white.offWhite"
                  borderRadius={6}
                  boxShadow="lg"
                  w="62.5%"
                  h={377}
                  maxH="2xl"
                >
                  <Text fontSize="2xl" mb="4" fontWeight="bold">
                    Estados dos Socios
                  </Text>
                  <Chart
                    options={options}
                    series={series}
                    type="line"
                    height={260}
                  />
                </Box>

                <Box
                  width="25%"
                  height={377}
                  bg="white.offWhite"
                  borderRadius={6}
                  boxShadow="lg"
                  justifyContent="flex-end"
                  //maxW='2xl'
                  //maxH='xl'
                >
                  <Text fontSize="2xl" ml={4} mb="4" fontWeight="bold">
                    Sócios Voluntários
                  </Text>
                  <Chart
                    options={config.options}
                    series={config.series}
                    type="pie"
                    height={260}
                  />
                </Box>
              </HStack>

              {/*Tabela */}
              {isLoading ? (
                <Flex justify="center">
                  <Spinner />
                </Flex>
              ) : error ? (
                <Flex justify="center">
                  <Text>Falha a obter os Dados.</Text>
                </Flex>
              ) : (
                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                  <Box
                    flex="1"
                    borderRadius={6}
                    boxShadow="lg"
                    bg="white.offWhite"
                    p="8"
                    mb="10"
                  >
                    <Flex mb="8" justify="space-between" align="center">
                      <Heading size="lg" fontWeight="bold">
                        Pagamentos em atraso ({pagamentoAtrasoTotal})
                      </Heading>

                      <Button
                        as="a"
                        color="gray.300"
                        fontSize="sm"
                        borderRadius="full"
                      >
                        Ver Mais
                      </Button>
                    </Flex>
                    <Table variant="striped" colorScheme="blackAlpha">
                      <Thead>
                        <Tr bg="gray.250">
                          <Th color="white.offWhite">NOME</Th>
                          <Th color="white.offWhite">EMAIL</Th>
                          <Th color="white.offWhite">VOLUNTÁRIO</Th>
                          <Th color="white.offWhite">DATA LIMITE</Th>
                          <Th color="white.offWhite">ÚLTIMO PAGAMENTO</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data?.data.Socios.map(
                          (SocioNaoPago: {
                            id: Key | null | undefined;
                            nome: string;
                            email: string;
                            data_limite: Date;
                            ultimo_pagamento: Date;
                            ativo: boolean;
                            voluntario: boolean;
                          }) => {
                            return (
                              <Tr key={SocioNaoPago.id}>
                                <Td fontSize="sm">{SocioNaoPago.nome}</Td>
                                <Td fontSize="sm">{SocioNaoPago.email}</Td>
                                <Td>
                                  {SocioNaoPago.voluntario ? (
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
                                  {new Date(
                                    SocioNaoPago.data_limite
                                  ).toLocaleDateString("es-CL", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                  })}
                                </Td>

                                <Td fontSize="sm">
                                  {new Date(
                                    SocioNaoPago.ultimo_pagamento
                                  ).toLocaleDateString("es-CL", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                  })}
                                </Td>
                              </Tr>
                            );
                          }
                        )}
                      </Tbody>
                    </Table>
                  </Box>
                </SimpleGrid>
              )}
            </Stack>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}

export default Dashboard;
