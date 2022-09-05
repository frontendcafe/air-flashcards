import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { TbLock, TbMail } from "react-icons/tb";

import AuthFormLayout from "@/modules/Auth/components/AuthFormLayout";
import CustomFormControl from "@/modules/Auth/components/CustomFormControl";
import { useAuth } from "@/modules/Auth/context/AuthProvider";
import { logIn } from "@/modules/Auth/firebase/auth";
import Form from "@/modules/Auth/Form";
import { Button } from "@chakra-ui/react";

const LoginPage: NextPage & { redirectIfAuthenticated: boolean } = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { setUser } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setIsError(false);
    setState({ ...state, [name]: value });
  };

  const handleSubmitLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    if (!password || !email) {
      setErrorMsg("LLena todos los campos.");
      return setIsError(true);
    }

    const user = await logIn(email, password);
    if (user) {
      return setUser(user);
    }

    setIsError(true);
    setErrorMsg("Email o contraseña incorrectos.");
    return setUser(null);
  };

  return (
    <AuthFormLayout title="Ingresar">
      <Form title="" onSubmit={handleSubmitLogin} submitLabel="Iniciar Sesión">
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

        <Link href="/forget-password">
          <Button variant="link" colorScheme="blue" size="sm">
            ¿Olvidastes tu contraseña?
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="link" colorScheme="blue" size="sm">
            ¿Eres Nuevo, Crea tu Cuenta?
          </Button>
        </Link>
      </Form>
    </AuthFormLayout>
  );
};

LoginPage.redirectIfAuthenticated = true;

export default LoginPage;
