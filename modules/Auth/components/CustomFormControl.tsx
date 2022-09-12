/* eslint-disable react/no-children-prop */
import { ChangeEventHandler } from "react";
import type { IconType } from "react-icons";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface Props {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  LeftIcon?: IconType;
  isError?: boolean;
  errorMsg?: string;
  ariaLabel?: string;
}

const CustomFormControl = ({
  label = "",
  name = "",
  type = "text",
  placeholder = "",
  onChange,
  LeftIcon = undefined,
  isError = false,
  errorMsg = "",
  ariaLabel = "",
}: Props) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {LeftIcon && (
          <InputLeftElement
            children={<Icon as={LeftIcon} pointerEvents="none" color="gray.100" />}
          />
        )}
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          onChange={onChange}
          _placeholder={{ color: "gray.100" }}
        />
      </InputGroup>

      {isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </FormControl>
  );
};
export default CustomFormControl;
