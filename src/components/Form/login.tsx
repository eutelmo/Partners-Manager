import { Flex, Button, Stack, Image, Text, Link } from "@chakra-ui/react";
import { Input } from "./Input/input";
import Logo from "../../images/logo.svg";
import { FormEvent, useContext, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);

      navigate("/dashboard");
    } catch (error) {}
  }

  return (
    //Page
    <Flex direction="row">
      {/**Login Container */}
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        bg="gray.50"
        p="10"
      >
        {/**Login Form */}
        
          <Flex
            boxShadow="dark-lg"
            //boxShadow='md'
            as="form"
            width="100%"
            maxWidth={380}
            bg="white.offWhite"
            p="8"
            flexDir="column"
            borderRadius="4"
            >
            <form
              onSubmit={onFinish}
            >

            <Stack spacing="2" mb={8} align="center" justify="center">
              <Text fontSize="lg" fontWeight="bold" color="blue.300">
                Faça o seu Login
              </Text>

              <Text color="gray.300" fontSize="xs">
                Insira o seu email e password abaixo
              </Text>
            </Stack>

            <Stack spacing="4">
              <Input
                name="email"
                type="email"
                label="EMAIL"
                fontSize="xs"
                placeholder="Inserir Email"
                value={email} 
              />
      
              <Input
                name="password"
                type="password"
                label="PASSWORD"
                fontSize="xs"
                placeholder="password"
              />
            </Stack>
            <Link
              href="/recovery"
              fontSize="xs"
              color="gray.300"
              textAlign="end"
              pt="1"
              pb="1"
            >
              Esqueceu a password?
            </Link>

            <Button type="submit" colorScheme="blue" size="lg">
              Entrar
            </Button>
            </form>
          </Flex>
       
        {/**LogoBox */}
      </Flex>
      <Flex
        bg="blue.300"
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        borderTopStartRadius={8}
        borderBottomStartRadius={8}
      >
        <Stack spacing="4">
          <Flex direction="column" align="center" justify="center">
            <Image src={Logo} boxSize="200px"></Image>

            <Text
              mt={8}
              fontSize="5xl"
              color="white.offWhite"
              fontWeight="bold"
            >
              Bem-vindo!
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Login;
