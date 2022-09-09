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
  { title: "Colecciones", href: "/collections" },
  { title: "Sesión de estudio", href: "/study-sessions" },
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
        <Box onClick={onOpen} cursor="pointer" display={{ lg: "none" }}>
          <Hamburguer />
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          {Links.map((link) => (
            <Text variant="navbar">
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </Text>
          ))}
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
              <Text variant="drawer">
                <Link href={link.href}>
                  <a>{link.title}</a>
                </Link>
              </Text>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
