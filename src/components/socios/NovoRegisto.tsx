import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Stack,
  Text,
  FormLabel,
  useDisclosure,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Modal,
  Center,
} from "@chakra-ui/react";
import { Input } from "../Form/Input/input";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";

import check from "../../images/check2.svg";
import modalCheckbox from "../../images/bx-check-circle.svg";
import axios from "axios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

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

function NovoRegisto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createSocioFormSchema),
    defaultValues: {
      ativo: true,
      ultimo_pagamento: new Date(Date.now()),
    },
  });

  const addSocio = handleSubmit((data) =>
    axios
      .post("https://sociosassociacao.herokuapp.com/Socios", data)
      .then(() => {
        console.log("Deu tudo certo");
        onOpen();
        reset();
      })
      .catch(() => {
        console.log("DEU ERRADO");
      })
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <form onSubmit={addSocio}>
      <Flex
        direction="column"
        h="100vh"
        ref={finalRef}
        tabIndex={-0.5}
        aria-label="Focus moved to this box"
      >
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
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Novo Registo
          </Text>
          <Flex mb="8" justify="space-between" align="center">
            <Flex p={8}>
              <Stack spacing="4">
                <Input
                  type="name"
                  label="NOME*"
                  fontSize="xs"
                  placeholder="Inserir Email"
                  w={316}
                  h={42}
                  error={errors.nome}
                  {...register("nome")}
                />
                <Input
                  type="email"
                  label="EMAIL*"
                  fontSize="xs"
                  placeholder="Inserir Email"
                  w={316}
                  h={42}
                  error={errors.email}
                  {...register("email")}
                />
                <FormLabel color="gray.300" fontSize="xs" fontWeight="bold">
                  VOLUNTARIO*
                </FormLabel>
                <Select
                  placeholder=""
                  fontSize="sm"
                  isRequired
                  {...register("voluntario")}
                >
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
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
            Novo Registo
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
            Novo Sócio Inserido com Sucesso!
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}

export default NovoRegisto;
