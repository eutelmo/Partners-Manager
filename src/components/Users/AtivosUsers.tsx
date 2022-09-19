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
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
} from "@chakra-ui/react";
import { api } from "../../services/api";
import React, { useState } from "react";
import axios from "axios";

import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";
import { useQuery } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import add from "../../images/person-plus.svg";
import trash from "../../images/bx-trash.svg";
import whiteTrash from "../../images/lixo_branco.svg";
import close from "../../images/bx-x.svg";
import modalCheckbox from "../../images/bx-check-circle.svg";

function AtivosUsers() {
  const fetchUsers = () => {
    return api.get("Admin");
  };

  const { data, isLoading, error, isFetching } = useQuery("Admin", fetchUsers, {
    refetchOnMount: true,
    refetchOnWindowFocus: "always",
  });
  console.log(error);
  console.log(data?.data.length);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const finalRef = React.useRef(null);

  function deletePost(id: any) {
    axios.delete(`https://sociosassociacao.herokuapp.com/Admin/delete/${id}`);
  }

  return (
    <>
      <Flex direction="column" h="100vh" ref={finalRef} tabIndex={-1}>
        <Header />
        <Sidebar />

        {/**Botao Novo registo */}
        <Flex justify="space-between" ml={274} mb={8}>
          <Text fontWeight="bold">Utilizadores</Text>
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
              Utilizadores Ativos ({data?.data.length})
            </Heading>
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
                  <Th color="white.offWhite"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.data.map(
                  (user: {
                    id: null | undefined;
                    nome: string;
                    email: string;
                  }) => {
                    return (
                      <Tr key={user.id}>
                        <>
                          <Td fontSize="md">{user.nome}</Td>
                          <Td fontSize="md">{user.email}</Td>
                          <Td>
                            <Button
                              float="right"
                              background="none"
                              textDecoration="none"
                              border="none"
                              variant="unstyled"
                              _focus={{ boxShadow: "none" }}
                              _active={{ boxShadow: "none", bg: "none" }}
                            >
                              <Image
                                onClick={onOpen}
                                float="right"
                                boxSize="1.4rem"
                                src={trash}
                                alt="Fluffybuns the destroyer"
                                mr="12px"
                              />
                            </Button>
                          </Td>
                        </>
                        {/** Primeiro Modal */}
                        <Modal
                          finalFocusRef={finalRef}
                          isOpen={isOpen}
                          onClose={onClose}
                          size="2xl"
                        >
                          <ModalOverlay
                            bg="none"
                            backdropFilter="auto"
                            backdropInvert="10%"
                            backdropBlur="0.5px"
                          />
                          <ModalContent p="5rem">
                            <ModalHeader
                              textAlign="center"
                              fontSize="2xl"
                              fontWeight="bold"
                            >
                              Tem a certeza que pretende eliminar os
                              utilizadores selecionados?
                            </ModalHeader>

                            <ModalFooter mt="5%" justifyContent="center">
                              <Button
                                bg="white.offWhite"
                                mr="4"
                                onClick={onClose}
                                color="gray.800"
                                leftIcon={<Image src={close} />}
                                p="6"
                                boxShadow="base"
                              >
                                Cancelar
                              </Button>

                              <Button
                                bg="#1D5175"
                                color="white.offWhite"
                                leftIcon={<Image src={whiteTrash} />}
                                p="6"
                                boxShadow="base"
                                onClick={() => deletePost(user.id)}
                              >
                                Eliminar
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>

                        {/** Segundo Modal */}

                        <Modal
                          finalFocusRef={finalRef}
                          isOpen={false}
                          onClose={onClose}
                          size="2xl"
                        >
                          <ModalOverlay />
                          <ModalContent p="5rem">
                            <ModalHeader
                              textAlign="center"
                              fontSize="2xl"
                              fontWeight="bold"
                            >
                              <Center>
                                <Image src={modalCheckbox} />
                              </Center>
                            </ModalHeader>

                            <ModalFooter
                              justifyContent="center"
                              textAlign="center"
                              fontSize="2xl"
                              fontWeight="bold"
                            >
                              Tem a certeza que pretende eliminar os
                              utilizadores selecionados?
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </Tr>
                    );
                  }
                )}
              </Tbody>
            </Table>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default AtivosUsers;
function queryClient() {
  throw new Error("Function not implemented.");
}
