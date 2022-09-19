import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Select,
  Stack,
  Text,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  Center,
  ModalFooter,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { Input } from "../Form/Input/input";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";

import check from "../../images/check2.svg";
import modalCheckbox from "../../images/bx-check-circle.svg";

import axios from "axios";
import { api } from "../../services/api";
import { useSocioData } from "../../hooks/useSocioData";

type FormData = {
  nome: string;
  email: string;
  ativo: boolean;
  ultimo_pagamento: Date;
  voluntario: boolean;
};

const createSocioFormSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome Obrigatorio")
    .matches(/^[aA-zZ\s]+$/, "Isso não é um nome valido"),
  email: yup.string().required("Email Obrigatorio").email("Formato invalido"),
});

function EditarSocio() {
  //Função modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const { id } = useParams();

  let history = useNavigate();

  //Função registar
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(createSocioFormSchema),
  });

  //Função Update
  const updateSocio = handleSubmit((data) =>
    axios
      .put(`https://sociosassociacao.herokuapp.com/Socios/${id}`, data)
      .then(() => {
        console.log("Deu tudo certo");
        onOpen();
      })
      .catch(() => {
        console.log("DEU ERRADO");
      })
  );

  //Dar get dos dados para editar
 
  const { socioId } = useParams()
  const { data, isError, error } = useSocioData(socioId);

  return (
    <form onSubmit={updateSocio}>
      <Flex direction="column" h="100vh">
        <Header />
        <Sidebar />

        <Flex justify="space-between" mb={10} ml={274} mr={6}>
          <Text color="gray.800" fontWeight="bold" fontSize="2xl">
            Sócio
          </Text>
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
          <Flex justify="space-between">
            <Text fontSize="lg" mb="4" fontWeight="bold">
              Editar Perfil
            </Text>
          </Flex>
          <Flex mb="8" justify="space-between" align="center">
            <Flex p={8}>
              <Stack spacing="4">
                <Input
                  name="name"
                  type="name"
                  label="NOME"
                  fontSize="xs"
                  placeholder="Inserir Email"
                  w={316}
                  h={42}
                />
                <Input
                  name="email"
                  type="email"
                  label="EMAIL"
                  fontSize="xs"
                  placeholder="Inserir Email"
                  w={316}
                  h={42}
                />
                <FormLabel color="gray.300" fontSize="xs" fontWeight="bold">
                  VOLUNTARIO
                </FormLabel>
                <Select placeholder="" fontSize="sm">
                  <option value="option1">Sim</option>
                  <option value="option2">Não</option>
                </Select>
              </Stack>
            </Flex>
          </Flex>
        </Box>

        <Flex justify="space-between" mb="10" ml={304} mr={50}>
          <Text color="gray.800">*Campos de preenchimento obrigatório</Text>
          <Button
            type="submit"
            bg="blue.300"
            color="white.offWhite"
            fontSize="sm"
            borderRadius="8"
          >
            <Image mr={2} src={check} boxSize={5} />
            Gravar
          </Button>
        </Flex>
      </Flex>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent p="5rem">
          <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
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
            Alterações Gravadas com Sucesso!
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}

export default EditarSocio;
function useEffects(arg0: () => void) {
  throw new Error("Function not implemented.");
}
