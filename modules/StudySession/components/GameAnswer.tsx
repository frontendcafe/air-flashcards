import React, { MouseEventHandler } from "react";

/* eslint-disable import/no-extraneous-dependencies */
import { MoodHappy, MoodSad } from "@chakra-icons/tabler-icons";
import { Box, Button, Stack } from "@chakra-ui/react";

interface GameAnswerProps {
  disabled: boolean;
  onClick: {
    incorrect: MouseEventHandler<HTMLButtonElement>;
    correct: MouseEventHandler<HTMLButtonElement>;
  };
}

interface BoxAnswerProps {
  type: "correct" | "incorrect";
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const BoxAnswer: React.FC<BoxAnswerProps> = ({ type, disabled, onClick }) => {
  // eslint-disable-next-line no-nested-ternary
  const focusColor = disabled ? "gray.100" : type === "correct" ? "status.success" : "status.error";

  const label = type === "correct" ? "Lo sé" : "No la sé";
  return (
    <Box
      as={Button}
      onClick={onClick}
      variant="unstyled"
      width="72px"
      height="56px"
      border="2px"
      textAlign="center"
      color={focusColor}
      borderColor={focusColor}
      borderRadius="md"
      py={1}
      disabled={disabled}
    >
      <Stack align="center">
        {type === "correct" ? (
          <MoodHappy w={6} h={6} fill="none" stroke={focusColor} strokeLinecap="square" />
        ) : (
          <MoodSad w={6} h={6} fill="none" stroke={focusColor} strokeLinecap="square" />
        )}
      </Stack>
      {label}
    </Box>
  );
};

const GameAnswer: React.FC<GameAnswerProps> = ({ disabled, onClick }) => {
  return (
    <Stack direction="row" justifyContent="space-between" w="full">
      <BoxAnswer type="incorrect" disabled={disabled} onClick={onClick.incorrect} />
      <BoxAnswer type="correct" disabled={disabled} onClick={onClick.correct} />
    </Stack>
  );
};

export default GameAnswer;
