import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CardSide {
  image?: string;
  text: string;
}

interface GameCardPops {
  sideA: CardSide;
  sideB: CardSide;
}

export const GameCard: React.FC<GameCardPops> = ({ sideA, sideB }) => {
  const [flip, setFlip] = useState(false);
  const MotionBox = motion(Box);

  return (
    <>
      <Box>
        <MotionBox
          onClick={() => setFlip(!flip)}
          borderRadius="10px"
          width={{ base: "250px", md: "500px" }}
          height="300px"
          position="relative"
          cursor="pointer"
        >
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
            animate={{ rotateY: flip ? [0, 360] : [360, 0] }}
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
            animate={{ rotateY: flip ? [180, 0] : [0, 180] }}
            transition={{ duration: 1 }}
          >
            {sideB.image && <img src={sideB.image} width={150} height={150} />}
            <Text mt={10} fontWeight={600}>
              {sideB.text}
            </Text>
          </MotionBox>
        </MotionBox>
      </Box>
    </>
  );
};
