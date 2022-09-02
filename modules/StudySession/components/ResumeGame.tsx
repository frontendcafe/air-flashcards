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
    correct >= incorrect ? `Aprendiste ${total} definiciones` : "¿Lo volves a intentar?";
  return (
    <Stack justifyContent="space-between" alignItems="center" {...props}>
      <Text fontWeight={600} fontSize="18px">
        {title}
      </Text>
      <Text fontSize="16px">{resultMsg}</Text>
      <OptionBtn type="main" onClick={onNavigate} />
      <OptionBtn type="secondary" onClick={onRestart} />
    </Stack>
  );
};
export default ResumeGame;
