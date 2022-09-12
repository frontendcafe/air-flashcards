import React from "react";

import { Select, SelectProps, Text } from "@chakra-ui/react";

interface Props extends SelectProps {
  option: string[];
  label: string;
}

const ComponentSelect = ({ label, option, ...props }: Props) => {
  return (
    <>
      <label htmlFor={label}>
        <Text variant="label" as="label">
          {label}
        </Text>
      </label>
      <Select {...props} placeholder="Select option">
        {option.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default ComponentSelect;
