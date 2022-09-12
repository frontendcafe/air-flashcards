import React from "react";

import { Snowflake } from "@chakra-icons/tabler-icons";
import { Box, Input, InputGroup, InputLeftElement, Stack, Text, Textarea } from "@chakra-ui/react";

interface TextFiedProps {
  label: string;
  placeholder: string;
  variant?: string;
  textarea?: boolean;
  iconName?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputFieldProps {
  placeholder: string;
  variant?: string;
  iconName?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  variant,
  iconName,
  onChange,
  value,
}) => {
  return (
    <Box>
      {iconName ? (
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={
              // TODO: entrada dinámica de Iconos tomando como parámetro iconName
              <Snowflake fill="none" w={7} h={7} stroke="gray.200" strokeLinecap="square" />
            }
          />
          <Input placeholder={placeholder} variant={variant} value={value} onChange={onChange} />
        </InputGroup>
      ) : (
        <Input placeholder={placeholder} variant={variant} value={value} onChange={onChange} />
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
  value,
  onChange,
}) => {
  return (
    <Stack py={3}>
      <Text variant="label" as="label">
        {label}
      </Text>

      {textarea === true ? (
        <Textarea
          placeholder={placeholder}
          variant={variant}
          resize="none"
          value={value}
          onChange={onChange}
        />
      ) : (
        <InputField
          placeholder={placeholder}
          variant={variant}
          iconName={iconName}
          value={value}
          onChange={onChange}
        />
      )}
    </Stack>
  );
};

export default TextField;
