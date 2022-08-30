/* eslint-disable react/no-children-prop */
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useAuth } from "@/modules/Auth/context/AuthProvider";
import Form from "@/modules/Auth/Form";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

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
    <Flex marginTop="141px" flexDirection="column" alignItems="center" justifyContent="center">
      <Box marginBottom="92px">
        <Image
          // loader={myLoader}
          src="/images/flash-logo.svg"
          alt="FlashCards"
          width={60}
          height={75}
        />
      </Box>
      <Text fontWeight={600} fontSize="20px">
        Recuperar Contraseña
      </Text>
      <Text>Podemos ayudarte, escribe la dirección de correo asociada a tu cuenta.</Text>
      <Form title="" onSubmit={handleSubmit} submitLabel="Enviar">
        <FormControl isInvalid={isError}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement children={<EmailIcon pointerEvents="none" color="gray.100" />} />
            <Input
              type="email"
              placeholder="Ingresa tu mail"
              aria-label="email"
              onChange={handleChange}
              _placeholder={{ color: "gray.100" }}
            />
          </InputGroup>

          {isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
        </FormControl>
      </Form>
    </Flex>
  );
};
export default ForgetPasswordPage;
