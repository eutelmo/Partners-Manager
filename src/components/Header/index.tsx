import {
  Flex,
  Icon,
  HStack,
  Box,
  Avatar,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Link,
} from "@chakra-ui/react";
import { RiNotificationLine } from "react-icons/ri";
import Profile from "../../images/photo.png";
import { Seach } from "./seachBox";

function Header() {
  return (
    <Box
      as="header"
      w="100%"
      position="relative"
      h="20"
      mx="auto"
      mt="4"
      px="6"
    >
      <Flex align="space-between" ml="auto">
        <Seach />

        {/**Icons */}
        <HStack spacing="8" mx="7" pr="3" py="1" color="gray.400">
          <Icon as={RiNotificationLine} fontSize="24" />
        </HStack>

        {/**Profile */}
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text color="gray.800" fontWeight="bold" fontSize="md">
              Miguel Borges
            </Text>
          </Box>

          <Menu>
            <MenuButton>
              <Avatar size="md" src={Profile} />
            </MenuButton>
            <MenuList>
              <MenuItem 
                as={Link}
                href="/EditarPerfil"
                _focus={{ boxShadow: "none" }}
              >
                Editar Perfil
              </MenuItem>
              <MenuItem>Alterar Password</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
