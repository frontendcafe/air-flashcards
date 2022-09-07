import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";

import { Box, Text } from "@chakra-ui/react";

interface CardSide {
  image?: string;
  text: string;
}

interface GameCardPops {
  sideA: CardSide;
  sideB: CardSide;
  onClick: MouseEventHandler<HTMLDivElement>;
  flipped: boolean;
}

export const GameCard: React.FC<GameCardPops> = ({ sideA, sideB, flipped, onClick }) => {
  const MotionBox = motion(Box);

  return (
    <Box>
      <MotionBox
        onClick={onClick}
        borderRadius="10px"
        w="full"
        height="300px"
        position="relative"
        cursor="pointer"
      >
        <MotionBox
          bg="white"
          border="2px"
          borderColor="gray.50"
          position="absolute"
          width="100%"
          height="100%"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            backfaceVisibility: "hidden",
          }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 1 }}
        >
          {sideA.image && <img src={sideA.image} width={150} height={150} />}
          <Text mt={10} fontWeight={600}>
            {sideA.text}
          </Text>
        </MotionBox>

        <MotionBox
          bg="white"
          //
          border="2px"
          borderColor="gray.50"
          position="absolute"
          width="100%"
          height="100%"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          //
          style={{
            backfaceVisibility: "hidden",
          }}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: flipped ? 0 : 180 }}
          transition={{ duration: 1 }}
        >
          {sideB.image && <img src={sideB.image} width={150} height={150} />}
          <Text mt={10} fontWeight={600}>
            {sideB.text}
          </Text>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};
