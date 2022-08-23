import React, { FormEventHandler, ReactNode } from "react";

import { Button } from "@chakra-ui/react";

interface FormProps {
  title?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children?: ReactNode;
  submitLabel: string;
}

const Form: React.FC<FormProps> = ({ title, onSubmit, children, submitLabel }) => {
  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      {title && <h1>{title}</h1>}

      <form onSubmit={onSubmit}>
        {children}
        <Button type="submit">{submitLabel}</Button>
      </form>
    </div>
  );
};

export default Form;
