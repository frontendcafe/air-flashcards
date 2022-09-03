import React from "react";

import { Select } from "@chakra-ui/react";

interface Category {
  option: string[];
  label: string;
}

const ComponentSelect = ({ label, option }: Category) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <Select placeholder="Select option">
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
