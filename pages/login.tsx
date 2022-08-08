import { NextPage } from "next";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import FormField from "../modules/Home/components/FormField";
import Form from "../modules/Home/Form";

const LoginPage: NextPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitLogin = () => {};

  return (
    <Form
      title="Iniciar Sesión"
      onSubmit={handleSubmitLogin}
      submitLabel="Iniciar Sesión"
    >
      <FormField
        name="email"
        label="Email"
        type="email"
        onChange={handleChange}
      />

      <FormField
        name="password"
        label="Contraseña"
        type="password"
        onChange={handleChange}
      />
    </Form>
  );
};

export default LoginPage;
