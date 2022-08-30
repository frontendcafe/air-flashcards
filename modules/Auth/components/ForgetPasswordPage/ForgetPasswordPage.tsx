import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import FormField from "@/modules/Auth/components/FormField";
import { useAuth } from "@/modules/Auth/context/AuthProvider";
import Form from "@/modules/Auth/Form";
import { Box, Flex, Text } from "@chakra-ui/react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { forgotPassword } = useAuth();

  // handlers
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!email) {
      // eslint-disable-next-line no-alert
      return window.alert("Please fill all fields");
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
        // eslint-disable-next-line no-alert
        return window.alert(err);
      });
  };

  return (
    <Flex
      marginTop="141px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="25px"
    >
      <Box marginBottom="92px">
        <Image
          // loader={myLoader}
          src="/images/flash-logo.svg"
          alt="FlashCards"
          width={60}
          height={75}
        />
      </Box>
      <Text>Recuperar Contraseña</Text>
      <Text>Podemos ayudarte, escribe la dirección de correo asociada a tu cuenta.</Text>
      <Form title="" onSubmit={handleSubmit} submitLabel="Enviar">
        <FormField name="email" label="Email" type="email" onChange={handleChange} />
      </Form>
    </Flex>
  );
};
export default ForgetPasswordPage;
