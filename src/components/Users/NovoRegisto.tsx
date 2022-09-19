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
  Modal,
  ModalOverlay,
  ModalContent,
  Center,
  useDisclosure,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import { Input } from "../Form/Input/input";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";

import check from "../../images/check2.svg";
import modalCheckbox from "../../images/bx-check-circle.svg";


import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import axios from "axios";

type FormData = {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const createUserFormSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome Obrigatorio")
    .matches(/^[aA-zZ\s]+$/, "Isso não é um nome valido"),
  email: yup.string().required("Email Obrigatorio").email("Formato invalido"),
});

function NovoRegistoUsers() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createUserFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    }
  });

  const addUser = handleSubmit((data) =>
    axios
      .post("https://sociosassociacao.herokuapp.com/Admin", data)
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
    <form onSubmit={addUser}>
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
            Utilizadores
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
                  placeholder="Inserir Nome"
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
            Criar
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
           Novo Utilizador Criado com Sucesso
          </ModalFooter>
        </ModalContent>
      </Modal>

    </form>
  );
}

export default NovoRegistoUsers;
