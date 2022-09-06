import React from "react";

import * as icons from "@chakra-icons/tabler-icons";
import { Box, Input, InputGroup, InputLeftElement, Stack, Text, Textarea } from "@chakra-ui/react";

interface TextFiedProps {
  label: string;
  placeholder: string;
  variant?: string;
  textarea?: boolean;
  iconName?: string;
}

interface InputFieldProps {
  placeholder: string;
  variant?: string;
  iconName?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, variant, iconName }) => {
  // chakra-icons package not type export * correctly
  // @ts-ignore
  const Icon = iconName && icons[iconName];

  return (
    <Box>
      {iconName ? (
        <InputGroup>
          {Icon && (
            <InputLeftElement pointerEvents="none">
              <Icon fill="none" w={7} h={7} stroke="gray.200" strokeLinecap="square" />
            </InputLeftElement>
          )}
          <Input placeholder={placeholder} variant={variant} />
        </InputGroup>
      ) : (
        <Input placeholder={placeholder} variant={variant} />
      )}
    </Box>
  );
};

const TextField: React.FC<TextFiedProps> = ({
  label,
  placeholder,
  textarea,
  variant,
  iconName,
}) => {
  return (
    <Stack py={3}>
      <Text variant="label" as="label">
        {label}
      </Text>

      {textarea === true ? (
        <Textarea placeholder={placeholder} variant={variant} resize="none" />
      ) : (
        <InputField placeholder={placeholder} variant={variant} iconName={iconName} />
      )}
    </Stack>
  );
};

export default TextField;
