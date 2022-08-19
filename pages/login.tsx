import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NextPage } from "next";

import FormField from "@/modules/Auth/components/FormField";
import { logIn } from "@/modules/Auth/firebase/auth";
import Form from "@/modules/Auth/Form";

const LoginPage: NextPage & { redirectIfAuthenticated: boolean } = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    if (!password || !email) {
      // eslint-disable-next-line no-alert
      window.alert("Please fill all fields");
      return;
    }

    const user = await logIn(email, password);
    if (user) {
      // eslint-disable-next-line no-alert
      window.alert("User logged");
      // eslint-disable-next-line no-console
      console.log(user);
    } else {
      // eslint-disable-next-line no-alert
      window.alert("Unable to login");
    }
  };

  return (
    <Form title="Iniciar Sesión" onSubmit={handleSubmitLogin} submitLabel="Iniciar Sesión">
      <FormField name="email" label="Email" type="email" onChange={handleChange} />

      <FormField name="password" label="Contraseña" type="password" onChange={handleChange} />
    </Form>
  );
};

LoginPage.redirectIfAuthenticated = true;

export default LoginPage;
