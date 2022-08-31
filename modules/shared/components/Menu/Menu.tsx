import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import MenuLogo from "../Icons/MenuLogo";
import Hamburguer from "../Icons/Hamburguer";
import Link from "next/link";

const Links = [
  { title: "Colecciones", href: "/Collection" },
  { title: "Sesión de estudio", href: "/SesiónEstudio" },
  { title: "Tienda", href: "/Tienda" },
  { title: "Perfil", href: "/Perfil" },
];

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <>
        <Flex justify="space-between" p={5}>
          <Box>
            <MenuLogo fill={"white"} width={18} height={23} borderColor="#1867FF" borderWidth={7} />
          </Box>
          <Box onClick={onOpen} cursor="pointer">
            <Hamburguer />
          </Box>
        </Flex>

        <Drawer onClose={onClose} isOpen={isOpen} size={{ base: "full", md: "sm" }}>
          <DrawerOverlay />
          <DrawerContent bg="primary.100">
            <DrawerCloseButton color="white" />
            <DrawerBody display="flex" flexDirection="column" marginTop="120px" alignItems="center">
              <MenuLogo
                fill="white"
                width={63}
                height={83}
                borderColor="primary.100"
                borderWidth={2}
              />
              {Links.map((link) => (
                <Text variant="menu">
                  <Link href={link.href}>
                    <a>{link.title}</a>
                  </Link>
                </Text>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </>
  );
}
