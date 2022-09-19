import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";


export function Seach() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  
  return(
    <>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        maxWidth={400}
        ml={250}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="white.offWhite"
        borderRadius="6"
        boxShadow='md'
      >
        <Icon as={RiSearchLine} fontSize="20"/>
        <Input 
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Pesquisa..."
          _placeholder={{ color: 'gray.400'}}
          ref={searchInputRef}
      />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      ></Flex>
    </>
  );
}