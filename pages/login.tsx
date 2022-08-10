import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NextPage } from "next";

import FormField from "@/modules/Auth/components/FormField";
import Form from "@/modules/Auth/Form";

const LoginPage: NextPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitLogin = () => {
    return "a";
  };

  return (
    <Form title="Iniciar Sesión" onSubmit={handleSubmitLogin} submitLabel="Iniciar Sesión">
      <FormField name="email" label="Email" type="email" onChange={handleChange} />

      <FormField name="password" label="Contraseña" type="password" onChange={handleChange} />
    </Form>
  );
};

export default LoginPage;
