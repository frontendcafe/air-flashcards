import React from "react";
import Link from "next/link";

import { logOut } from "@/modules/Auth/firebase/auth";
import {
  Box,
  Button,
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
  { title: "Colecciones", href: "/" },
  { title: "Sesión de estudio", href: "/study-sessions" },
  // TODO: ADD WHEN READY
  // { title: "Tienda", href: "/Tienda" },
  // { title: "Perfil", href: "/Perfil" },
  { title: "Cerrar sesión", onClick: logOut },
];

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%">
      <Flex justify="space-between" p={5}>
        <Box>
          <MenuLogo fill="white" width={18} height={23} borderColor="primary.100" borderWidth={7} />
        </Box>
        <Box onClick={onOpen} cursor="pointer" display={{ lg: "none" }}>
          <Hamburguer />
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          {Links.map((link) => {
            if (link.onClick) {
              return (
                <Button onClick={link.onClick} variant="link">
                  <Text variant="navbar">{link.title}</Text>
                </Button>
              );
            }
            return (
              <Text key={link.href} variant="navbar">
                <Link href={link.href}>{link.title}</Link>
              </Text>
            );
          })}
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
              if (link.onClick) {
                return (
                  <Button
                    position="fixed"
                    bottom="5vh"
                    left="2vh"
                    onClick={link.onClick}
                    variant="link"
                  >
                    <Text variant="drawer">{link.title}</Text>
                  </Button>
                );
              }
              return (
                <Text key={link.href} variant="drawer">
                  <Link href={link.href || ""}>{link.title}</Link>
                </Text>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Menu;
