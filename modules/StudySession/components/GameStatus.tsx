import React from "react";

import { Box, Stack, StackProps, Text } from "@chakra-ui/react";

interface ResultBoxProps {
  amount: number;
  type: "correct" | "incorrect";
}
interface GameStatusProps extends StackProps {
  correct: number;
  incorrect: number;
  total: number;
}

const ResultBox: React.FC<ResultBoxProps> = ({ amount, type }) => {
  const bgColor = type === "correct" ? "status.success" : "status.error";
  const label = `${amount} ${type === "correct" ? "Correctas" : "Incorrectas"}`;
  return (
    <Box bgColor={bgColor} px={3} py={2} borderRadius="md">
      <Text>{label}</Text>
    </Box>
  );
};

const GameStatus: React.FC<GameStatusProps> = ({ correct, incorrect, total, ...props }) => {
  const progressText = `${correct + incorrect}/${total}`;
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" {...props}>
      <ResultBox amount={incorrect} type="incorrect" />

      <Box>
        <Text>{progressText}</Text>
      </Box>

      <ResultBox amount={correct} type="correct" />
    </Stack>
  );
};
export default GameStatus;
