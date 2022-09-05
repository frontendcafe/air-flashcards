import React from "react";
import Image from "next/image";

import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const AuthFormLayout = ({ title, children }: Props) => {
  return (
    <Flex marginTop="141px" flexDirection="column" alignItems="center" justifyContent="center">
      <Box marginBottom="92px">
        <Image
          // loader={myLoader}
          src="/images/flash-logo.svg"
          alt="FlashCards"
          width={60}
          height={75}
        />
      </Box>
      <Text fontWeight={600} fontSize="20px">
        {title}
      </Text>
      {children}
    </Flex>
  );
};
export default AuthFormLayout;
