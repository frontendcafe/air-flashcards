import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NextPage } from "next";

import FormField from "@/modules/Auth/components/FormField";
import { signUp } from "@/modules/Auth/firebase/auth";
import Form from "@/modules/Auth/Form";

const Register: NextPage & { redirectIfAuthenticated: boolean } = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password, repeatPassword } = state;

    if (!password || !repeatPassword || !email) {
      // eslint-disable-next-line no-alert
      window.alert("Please fill all fields");
      return;
    }

    if (password !== repeatPassword) {
      // eslint-disable-next-line no-alert
      window.alert("Passwords do not match");
      return;
    }

    const user = await signUp(email, password);

    if (user) {
      // eslint-disable-next-line no-alert
      window.alert("User created");
      // eslint-disable-next-line no-console
      console.log(user);
    } else {
      // eslint-disable-next-line no-alert
      window.alert("User not created");
    }
  };

  return (
    <Form title="Registrate" onSubmit={handleSubmitRegister} submitLabel="Registrate">
      <FormField name="email" label="Email" type="email" onChange={handleChange} />

      <FormField name="password" label="Contraseña" type="password" onChange={handleChange} />

      <FormField
        name="repeatPassword"
        label="Repetir Contraseña"
        type="password"
        onChange={handleChange}
      />
    </Form>
  );
};

Register.redirectIfAuthenticated = true;

export default Register;
