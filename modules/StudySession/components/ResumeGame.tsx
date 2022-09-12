import React, { MouseEventHandler } from "react";

import { Button, Stack, StackProps, Text } from "@chakra-ui/react";

interface ResumeGameProps extends StackProps {
  total: number;
  correct: number;
  incorrect: number;
  onNavigate?: MouseEventHandler<HTMLElement>;
  onRestart?: MouseEventHandler<HTMLElement>;
}
interface OptionBtnProps {
  type: "main" | "secondary";
  onClick?: MouseEventHandler<HTMLElement>;
}
const OptionBtn: React.FC<OptionBtnProps> = ({ type, onClick }) => {
  const variant = type === "main" ? "primary" : "secondary";
  const label = type === "main" ? "Ir a mis colecciones" : "Reiniciar";
  return (
    <Button w="200px" fontSize="14px" variant={variant} size="lg" onClick={onClick}>
      {label}
    </Button>
  );
};

const ResumeGame: React.FC<ResumeGameProps> = ({
  total,
  correct,
  incorrect,
  onNavigate,
  onRestart,
  ...props
}) => {
  const title = correct >= incorrect ? "¡Muy bien!" : "¡No te desanimes!";
  const resultMsg =
    correct >= incorrect ? `Aprendiste ${correct}/${total} conceptos` : "¿Lo volves a intentar?";
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      border="2px solid"
      borderColor="gray.50"
      minH={314}
      p={6}
      borderRadius="xl"
      {...props}
    >
      <Text fontWeight={600} fontSize="18px">
        {title}
      </Text>
      <Text fontSize="16px">{resultMsg}</Text>
      <Stack spacing={3}>
        <OptionBtn type="main" onClick={onNavigate} />
        <OptionBtn type="secondary" onClick={onRestart} />
      </Stack>
    </Stack>
  );
};
export default ResumeGame;
