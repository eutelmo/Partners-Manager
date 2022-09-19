import { Box, Flex, Button, Stack, Image, Text, Link } from '@chakra-ui/react'
import { Input } from '../Input/input';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Logo from '../../../images/logo.svg'


function RecoveryEmail() {
  return (
    //Page
   <Flex
    direction="row"
  >
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
            boxShadow='dark-lg'
            //boxShadow='md'
            as="form" 
            width="100%" 
            maxWidth={380}
            bg="white.offWhite"
            p="8"
            flexDir="column"
            borderRadius="4"
          >
            <Stack
              spacing="2"
              mb={8}
              align="center" 
              justify="center"
            >
              <Text
                fontSize="lg"
                fontWeight='bold'
                color="blue.300"
              >
                Recuperação de Senha
              </Text>

              <Text
                color="gray.300"
                fontSize="xs"
              >
                Insira o seu email de registo
              </Text>
            </Stack>

            <Stack spacing="4">

              <Input 
                name="email" 
                type="email"
                label="Email"
                fontSize="sm"
                placeholder="Inserir Email"

              />
               <Text
                fontSize="xs"
                color="gray.300"
                pb="10"
               >
                Verifica a tua caixa de email, receberás um link para redefinires uma nova password.
               </Text>
              <Button 
                type="submit" 
                colorScheme='blue'
                size="lg"
              >
                Recuperar Password
              </Button>
              </Stack>
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
              <Flex 
                direction="column"
                align="center" 
                justify="center"
              >
              
                <Image
                  src={Logo}
                  boxSize='200px'
                >
                </Image>

              </Flex>
            </Stack>
          </Flex>     
    </Flex>
  );
}

export default RecoveryEmail