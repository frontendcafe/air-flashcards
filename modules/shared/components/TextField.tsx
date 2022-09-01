import React from "react";

import { Snowflake } from "@chakra-icons/tabler-icons";
import { Box, Input, InputGroup, InputLeftElement, Stack, Textarea } from "@chakra-ui/react";

interface TextFiedProps {
  label: string;
  placeholder: string;
  variant: string;
  textarea?: boolean;
  iconName?: string;
}

interface InputFieldProps {
  placeholder: string;
  variant: string;
  iconName?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, variant, iconName }) => {
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
    <Stack>
      <label
        htmlFor="textfield"
        style={{ color: "#111827", fontSize: "18px", fontFamily: "Work Sans" }}
      >
        {label}
      </label>
      {textarea === true ? (
        <Textarea placeholder={placeholder} variant={variant} resize="none" />
      ) : (
        <InputField placeholder={placeholder} variant={variant} iconName={iconName} />
      )}
    </Stack>
  );
};

export default TextField;
