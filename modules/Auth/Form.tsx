import React, { FormEventHandler, ReactNode } from "react";

interface FormProps {
  title?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children?: ReactNode;
  submitLabel: string;
}

const Form: React.FC<FormProps> = ({
  title,
  onSubmit,
  children,
  submitLabel,
}) => {
  return (
    <div>
      {title && <h1>{title}</h1>}

      <form onSubmit={onSubmit}>
        {children}

        <button type="submit">{submitLabel}</button>
      </form>
    </div>
  );
};

export default Form;
