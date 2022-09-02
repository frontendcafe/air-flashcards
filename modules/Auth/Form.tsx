import React, { FormEventHandler, ReactNode } from "react";

import { Button, Stack } from "@chakra-ui/react";

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
        <Stack spacing={3}>
          {children}
          <Button type="submit">{submitLabel}</Button>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
