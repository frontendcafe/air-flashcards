import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import { signUp } from "@/modules/Auth/firebase/auth";
import FormField from "@/modules/Auth/components/FormField";
import Form from "@/modules/Auth/Form";
import { NextPage } from "next";

const Register: NextPage & {redirectIfAuthenticated: boolean} = () => {

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
      window.alert("Please fill all fields");
      return;
    }

    if (password !== repeatPassword) {
      window.alert("Passwords do not match");
      return;
    }

    const user = await signUp(email, password);

    if (user) {
      window.alert("User created");
      console.log(user);
    } else {
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

Register.redirectIfAuthenticated = true

export default Register;
