import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { TbLock, TbMail } from "react-icons/tb";

import AuthFormLayout from "@/modules/Auth/components/AuthFormLayout";
import CustomFormControl from "@/modules/Auth/components/CustomFormControl";
import { useAuth } from "@/modules/Auth/context/AuthProvider";
import { signUp } from "@/modules/Auth/firebase/auth";
import Form from "@/modules/Auth/Form";
import { Button } from "@chakra-ui/react";

const Register: NextPage & { redirectIfAuthenticated: boolean } = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { setUser } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setIsError(false);
    setState({ ...state, [name]: value });
  };

  const handleSubmitRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password, repeatPassword } = state;

    if (!password || !repeatPassword || !email) {
      setErrorMsg("Llena todos los campos.");
      return setIsError(true);
    }

    if (password !== repeatPassword) {
      setIsError(true);
      return setErrorMsg("Contraseña do not match.");
    }

    const user = await signUp(email, password);

    if (user) {
      return setUser(user);
    }

    setIsError(true);
    setErrorMsg("Algo salio mal, user not created");
    return setUser(null);
  };

  return (
    <AuthFormLayout title="Hola!">
      <Form title="" onSubmit={handleSubmitRegister} submitLabel="Crear cuenta">
        {/* EMAIL */}
        <CustomFormControl
          label="Email"
          type="email"
          name="email"
          LeftIcon={TbMail}
          placeholder="Ingresa tu mail"
          isError={isError}
          ariaLabel="email"
          onChange={handleChange}
          errorMsg={errorMsg}
        />

        {/* PASSWORD */}
        <CustomFormControl
          label="Contraseña"
          type="password"
          name="password"
          LeftIcon={TbLock}
          placeholder="Ingresa tu contraseña"
          isError={isError}
          ariaLabel="password"
          onChange={handleChange}
          errorMsg={errorMsg}
        />

        {/* REPEAT PASSWORD */}
        <CustomFormControl
          label="Contraseña"
          type="password"
          name="repeatPassword"
          LeftIcon={TbLock}
          placeholder="Repite tu contraseña"
          isError={isError}
          ariaLabel="repeatPassword"
          onChange={handleChange}
          errorMsg={errorMsg}
        />

        <Link href="/login">
          <Button variant="link" colorScheme="blue" size="sm">
            ¿Ya Tienes Cuenta?
          </Button>
        </Link>
      </Form>
    </AuthFormLayout>
  );
};

Register.redirectIfAuthenticated = true;

export default Register;
