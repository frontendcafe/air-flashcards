import React, { ChangeEventHandler } from "react";

import { Input } from "@chakra-ui/react";

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
  // TODO: Remove this eslint rule
  // eslint-disable-next-line react/require-default-props
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, onChange }) => {
  return (
    <div>
      <label htmlFor="email">{label}</label>
      <Input type={type} id={name} name={name} onChange={onChange} />
    </div>
  );
};

export default FormField;
