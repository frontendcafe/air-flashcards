import React, { ChangeEvent, ChangeEventHandler, forwardRef, LegacyRef, useState } from "react";

import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderProps,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

interface SliderInputProps extends Omit<SliderProps, "onChange"> {
  label: string;
  min: number;
  max: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SliderInput: React.FC<SliderInputProps> = forwardRef(
  ({ label, min, max, ...props }, ref) => {
    const [sliderValue, setSliderValue] = useState(1);

    return (
      <Box>
        <Text as="label" variant="label" htmlFor="slider-input" mb={4}>
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
            id="slider-input"
            {...props}
            onChange={(val) => {
              // this is neccesary because React Hook Form needs an event in onChange to work but onChange of Chakra Slider returns a number
              props.onChange?.({
                target: {
                  name: props.name || "",
                  value: String(val) || "",
                },
              } as ChangeEvent<HTMLInputElement>);

              return setSliderValue(val);
            }}
            value={sliderValue}
            ref={ref as LegacyRef<any>}
          >
            {sliderValue !== 1 && (
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
    );
  }
);

SliderInput.displayName = "SliderInput";
