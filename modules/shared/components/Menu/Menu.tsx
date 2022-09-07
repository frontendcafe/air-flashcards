import React from "react";
import Link from "next/link";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import Hamburguer from "../Icons/Hamburguer";
import MenuLogo from "../Icons/MenuLogo";

const Links = [
  { title: "Colecciones", href: "/Collection" },
  { title: "Sesión de estudio", href: "/SesiónEstudio" },
  { title: "Tienda", href: "/Tienda" },
  { title: "Perfil", href: "/Perfil" },
];

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify="space-between" p={5}>
        <Box>
          <MenuLogo fill="white" width={18} height={23} borderColor="primary.100" borderWidth={7} />
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
            {Links.map((link) => {
              return (
                <Text variant="menu" key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </Text>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
