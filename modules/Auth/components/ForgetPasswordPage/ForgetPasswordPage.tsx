/* eslint-disable react/no-children-prop */
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TbMail } from "react-icons/tb";

import { useAuth } from "@/modules/Auth/context/AuthProvider";
import Form from "@/modules/Auth/Form";
import { Button, Text } from "@chakra-ui/react";

import AuthFormLayout from "../AuthFormLayout";
import CustomFormControl from "../CustomFormControl";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { forgotPassword } = useAuth();
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // handlers
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsError(false);
    setEmail(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMsg("Email inválido.");
      return setIsError(true);
    }

    return forgotPassword(email)
      .then(() => {
        // eslint-disable-next-line no-alert
        window.alert(
          `Se ha enviado un link de reset password al correo ${email}. Revisa en tus correos no deseados, el correo remitente es noreply@air-flashcards.firebaseapp.com`
        );
        return router.push("/login");
      })
      .catch((err) => {
        setIsError(true);
        return setErrorMsg(err?.message ?? "Algo salio mal");
      });
  };

  return (
    <AuthFormLayout title="Recuperar Contraseña">
      <Text>Podemos ayudarte, escribe la dirección de correo asociada a tu cuenta.</Text>
      <Form title="" onSubmit={handleSubmit} submitLabel="Enviar">
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
        <Link href="/login">
          <Button variant="link" colorScheme="blue" size="sm">
            Regresar
          </Button>
        </Link>
      </Form>
    </AuthFormLayout>
  );
};
export default ForgetPasswordPage;
