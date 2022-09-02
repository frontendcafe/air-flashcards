import React, { MouseEventHandler } from "react";

/* eslint-disable import/no-extraneous-dependencies */
import { MoodHappy, MoodSad } from "@chakra-icons/tabler-icons";
import { Box, Stack } from "@chakra-ui/react";

interface GameAnswerdProps {
  disabled: boolean;
}

interface BoxAnswerProps {
  type: "correct" | "incorrect";
  disabled: boolean;
  onclick?: MouseEventHandler<HTMLElement>;
}

const BoxAnswer: React.FC<BoxAnswerProps> = ({ type, disabled, onclick }) => {
  // eslint-disable-next-line no-nested-ternary
  const focusColor = disabled ? "gray.100" : type === "correct" ? "status.success" : "status.error";

  const label = type === "correct" ? "Lo sé" : "No la sé";
  return (
    <Box
      as="button"
      onClick={onclick}
      width="72px"
      height="56px"
      border="2px"
      textAlign="center"
      color={focusColor}
      borderColor={focusColor}
      borderRadius="md"
      py={1}
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

const GameAnswer: React.FC<GameAnswerdProps> = ({ disabled }) => {
  return (
    <Stack direction="row" justifyContent="space-around" marginTop="10px" w="259px">
      <BoxAnswer type="incorrect" disabled={disabled} />
      <BoxAnswer type="correct" disabled={disabled} />
    </Stack>
  );
};

export default GameAnswer;
