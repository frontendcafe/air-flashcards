import React from "react";

import { Select, SelectProps } from "@chakra-ui/react";

interface Props extends SelectProps {
  option: string[];
  label: string;
}

const ComponentSelect = ({ label, option, ...props }: Props) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
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
