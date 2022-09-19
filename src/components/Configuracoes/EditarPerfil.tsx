import { Avatar, Box, Button, Flex, SimpleGrid, Stack, Text, Image, Input, FormLabel, InputGroup, InputLeftElement, InputRightElement, HStack } from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";


import Profile from '../../images/photo.png'
import Reload from '../../images/reload.svg'
import Pencil from '../../images/pencil.svg'
import Upload from '../../images/upload.svg'
import Download from '../../images/download.svg'

function EditarProfil() {
  return(
    <>
      <Flex direction="column" h="100vh" > 
        <Header />
        <Sidebar />
      
        <Flex ml={274} mt={4}>
          <Text fontWeight="bold" fontSize='2xl' mb={4}>Configurações</Text>
        
        </Flex>
        
        <Stack spacing={4} ml={274} mr={6} pb={8}>
          {/** Avatar */}
          <Box flex="1" borderRadius={6} bg='white.offWhite' boxShadow='md'>
                <Stack spacing="4" mx="8" >
                      <Text fontSize="lg" mb="4" fontWeight="bold">Editar Perfil</Text>
                  </Stack>
                    <HStack p={4} justify="space-between">
                      <Flex flex="center" px={4}>
                        <Stack>
                          {/** Foto */}
                          <Avatar size="xl" src={Profile} mx={4}/>
                          <Button 
                            bg="blue.300"
                            color="white.offWhite"
                            fontSize="md"
                            borderRadius="8"
                            mr={20}
                          >
                            <Image 
                              mr={2}
                              src={Reload} 
                              boxSize={5} 
                            />
                            Alterar Foto
                          </Button>
                        </Stack>
                      </Flex>
                      {/** Nome e Email */}
                      <Flex >
                      <Stack spacing="4" >
                        <Box>
                          <FormLabel color='gray.300' fontSize='xs' fontWeight='bold'>NOME DE UTILIZADOR</FormLabel>
                          <InputGroup>
                            <InputRightElement
                                  pointerEvents='none'
                                  color='gray.300'
                                  fontSize='1.2em'
                                  children={<Image src={Pencil}/>}
                                />
                              <Input 
                                  name="name" 
                                  type="name"
                                  fontSize="xs"
                                  w={316} 
                                  h={42}
                                />
                          </InputGroup>
                        </Box>
                          
                        <Box>
                          <FormLabel color='gray.300' fontSize='xs' fontWeight='bold'>EMAIL</FormLabel>
                          <InputGroup>
                            <InputRightElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children={<Image src={Pencil}/>}
                              />
                              <Input 
                                name="email" 
                                type="email"
                                fontSize="xs"
                                w={316} 
                                h={42}
                                
                              />
                          </InputGroup>
                          
                        </Box>  
                      </Stack>
                      </Flex>
                      {/** shiu */}
                      <Flex ></Flex>
                    </HStack>

          </Box>
          

            {/** Anterar Pass */}
            <HStack spacing={8} >
              <Box flex="1" borderRadius={6} bg='white.offWhite' w="100%" p="4" h={340} boxShadow='md'>
                <SimpleGrid flex="1" gap="4">
                    <Stack spacing="4" >
                        <Text fontSize="lg" mb="4" fontWeight="bold">Alterar Password</Text>
                    </Stack>
                      <Stack spacing="4" >
                        <Box w={400} pl={8}>
                          <FormLabel color='gray.300' fontSize='xs' fontWeight='bold'>NOME DE UTILIZADOR</FormLabel>
                          <InputGroup>
                            <InputRightElement
                                  pointerEvents='none'
                                  color='gray.300'
                                  fontSize='1.2em'
                                  children={<Image src={Pencil}/>}
                                />
                              <Input 
                                  name="name" 
                                  type="name"
                                  placeholder="Password"
                                  fontSize="xs"
                                  w="100%"
                                  h={42}
                                />
                          </InputGroup>
                        </Box>
                          
                        <Box w={400} pl={8}>
                          <FormLabel color='gray.300' fontSize='xs' fontWeight='bold'>EMAIL</FormLabel>
                          <InputGroup>
                            <InputRightElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children={<Image src={Pencil}/>}
                              />
                              <Input 
                                name="email" 
                                type="email"
                                placeholder="Password"
                                fontSize="xs"
                                w="100%" 
                                h={42}
                                
                              />
                          </InputGroup>
                          <Button 
                            mt={2}
                            type="submit" 
                            bg='blue.300'
                            color="white.offWhite"
                            size="lg"
                            w="100%"
                          >
                            Redefinir Password
                          </Button>
                        </Box>  
                      </Stack>
                </SimpleGrid>
              </Box>

              {/** Anterar email */}
              <Box flex="1" borderRadius={6} bg='white.offWhite' h={340} p="4" boxShadow='md'>
                <SimpleGrid flex="1" gap="4">
                    <Stack spacing="4" >
                        <Text fontSize="lg" mb="4" fontWeight="bold">Alterar Email no Envio de Email’s</Text>
                    </Stack>
                      <Flex pl={8} mb={4}>
                        <Stack spacing="4" >
                            <Box>
                              <FormLabel color='gray.300' fontSize='xs' fontWeight='bold'>NOME DE UTILIZADOR</FormLabel>
                              <InputGroup>
                                <InputRightElement
                                      pointerEvents='none'
                                      color='gray.300'
                                      fontSize='1.2em'
                                      children={<Image src={Pencil}/>}
                                    />
                                  <Input 
                                      name="name" 
                                      type="name"
                                      fontSize="xs"
                                      w={316} 
                                      h={42}
                                    />
                              </InputGroup>
                            </Box>
                          </Stack>
                      </Flex>
                </SimpleGrid>
              </Box>
            </HStack>

            {/** Importações */}
            <Box flex="1" borderRadius={6} bg='white.offWhite' h={400} mb={8} boxShadow='md'>
                <SimpleGrid flex="1" gap="4">
                  <Text fontSize="lg" p={4} fontWeight="bold">Importações</Text>
                    <HStack spacing="4" mx="4" mb={4} justify="space-between">
                      {/**Import imagem */}
                      <Stack ml={8}>
                        <FormLabel color='gray.300' fontSize='xs' fontWeight='bold' >IMPORTAR LISTA DE SÓCIOS</FormLabel>
                        <InputGroup mb={8}>
                          <InputRightElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children={<Image src={Upload}/>}
                              />
                            <Input 
                                as="button"
                                fontSize="xs"
                                placeholder="Upload de ficheiro"
                                w={360}
                                h={42}
                                color='gray.300'
                            >
                              Upload de ficheiro
                            </Input>
                        </InputGroup>
                        <FormLabel color='gray.300' fontSize='xs'>(apenas ficheiro scv)</FormLabel>
                      </Stack>

                      {/**Imagens */}
                      <Stack>
                        <FormLabel color='gray.300' fontSize='xs' fontWeight='bold' >IMPORTAR LISTA DE SÓCIOS</FormLabel>
                          <HStack >
                            <FormLabel color='gray.300' fontSize='xs' >30/02/2022</FormLabel>
                            <FormLabel color='gray.800' fontSize='xs'>lista_soviosv2.scv</FormLabel>
                            <Image src={Download}/>
                          </HStack>

                          <HStack>
                            <FormLabel color='gray.300' fontSize='xs' >15/02/2022</FormLabel>
                            <FormLabel color='gray.800' fontSize='xs'>lista_soviosv1.scv</FormLabel>
                            <Image src={Download}/>
                          </HStack>
                      </Stack>

                      {/**shiu */}
                      <Stack></Stack>
                    </HStack>
              </SimpleGrid>
            </Box>
        </Stack>
      </Flex>
        
      
    </>
  );
}

export default EditarProfil