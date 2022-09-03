import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text,
  Box,
} from "@chakra-ui/react";

interface SliderInputPops {
  label: string;
  min: number;
  max: number;
}

export const SliderInput: React.FC<SliderInputPops> = ({ label, min, max }) => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <>
      <Box p={3}>
        <Text variant="label" mb={35}>
          {label}
        </Text>
        <Box display="flex">
          <Text mr={4}>{min}</Text>
          <Slider
            maxWidth={500}
            aria-label="slider-ex-1"
            defaultValue={max}
            min={min}
            max={max}
            step={1}
            onChange={(val) => setSliderValue(val)}
          >
            {sliderValue != 1 && (
              <SliderMark
                value={sliderValue}
                borderRadius={10}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {sliderValue}
              </SliderMark>
            )}
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bg="primary.200" />
          </Slider>
          <Text ml={4}>{max}</Text>
        </Box>
      </Box>
    </>
  );
};
