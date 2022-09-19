import {
  Box,
  Stack,
  Text,
  Link,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer
} from "@chakra-ui/react";
import Logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import home from "../../images/home.svg";
import settings from "../../images/setting.svg";
import team from "../../images/team.svg";
import logout from "../../images/box-arrow-left.svg";

function Sidebar() {
  return (
    <Stack
      as="aside"
      position="fixed"
      w="64"
      mr="8"
      borderTopEndRadius={8}
      borderBottomEndRadius={8}
      bg="blue.300"
      height="100%"
      align="flex-start"
      
    >
      <Image src={Logo} boxSize="100px" ml="66" mt="26"></Image>
      <Box>
        <Stack spacing="6" mt="8" align="strech">
          <Link display="flex" color="white.offwhite" px="8" href="/dashboard" _focus={{boxShadow: "none"}}>
            <Image src={home} mr="1" fontSize="20" />
            <Text color="white.offWhite">Dashboard</Text>
          </Link>

          <Accordion allowMultiple w="64">
            <AccordionItem sx={{ border: "none" }}>
              <AccordionButton sx={{ border: "none", outline: "none"  }} mb="4"   _focus={{boxShadow: "none"}}>
                <Image src={team}  mr="1" fontSize="20"ml="4" />
                <Text color="white.offWhite">Socios</Text>
                <Spacer />
                <AccordionIcon color="white.offWhite" />
              </AccordionButton>

              <AccordionPanel>
                <Link
                  display="flex"
                  color="white.offwhite"
                  pl="10"
                  pb={2}
                  href="/socios"
                >
                  <Text color="white.offWhite">Ativos</Text>
                </Link>

                <Link
                  display="flex"
                  color="white.offwhite"
                  pl="10"
                  pb={2}
                  href="/inativos"
                >
                  <Text color="white.offWhite">Inativos</Text>
                </Link>

                <Link
                  display="flex"
                  color="white.offwhite"
                  pl="10"
                  pb={2}
                  href="/novoRegisto"
                >
                  <Text color="white.offWhite">Novo Registo</Text>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            {/**Utilizadores */}

            <AccordionItem sx={{ border: "none" }} ml="4">
              <AccordionButton _focus={{boxShadow: "none"}}>
                <Image src={profile}  mr="1"  fontSize="20" />
                <Text color="white.offWhite">Utilizadores</Text>
                <Spacer/>
                <AccordionIcon color="white.offWhite" />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Link
                  display="flex"
                  color="white.offwhite"
                  pl="10"
                  pb={2}
                  href="/utilizadores"
                >
                  <Text color="white.offWhite">Ativos</Text>
                </Link>

                <Link
                  display="flex"
                  color="white.offwhite"
                  pl="10"
                  href="/novoRegistoUsers"
                >
                  <Text color="white.offWhite">Novo Registo</Text>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Link
            display="flex"
            color="white.offwhite"
            px="8"
            href="/EditarPerfil"
            _focus={{boxShadow: "none"}}
          >
            <Image src={settings} mr="1" fontSize="20" />
            <Text color="white.offWhite">Configurações</Text>
          </Link>

          <Box position="absolute" bottom="4%" w="100%">
            <Stack
              borderTopWidth={1}
              borderColor="white.offWhite"
              mb="4"
              w="100%"
            ></Stack>
            <Link display="flex" color="white.offwhite" px="8">
              <Image src={logout} mr="1" fontSize="20" />
              <Text color="white.offWhite">Logout</Text>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Sidebar;
