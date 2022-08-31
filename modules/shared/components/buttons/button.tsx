import React from "react";
import { background, Button as CharkraButton } from "@chakra-ui/react";

interface ButtonProps {
  size: string;
  light?: boolean;
  outline?: boolean;
  disabled?: boolean;
}

export default function Button({ size = "md", light, outline, disabled }: ButtonProps) {
  let props = {};

  if (light) {
    props = {
      ...props,
      backgroundColor: "#FFFFFF",
      color: "primary.300",
      fontWeight: 600,
      borderRadius: "6px",
      boxSizing: "border-box",
      _hover: {
        background: "#EDF2F7",
      },
      _focus: {
        background: "#E2E8F0",
      },
      _disabled: {
        opacity: 0.5,
      },
    };
  }

  if (outline) {
    props = {
      ...props,
      border: "1px solid #E2E8F0",
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      _hover: {
        background: "#EDF2F7",
        border: "1px solid #CFD3DC",
      },
      _focus: {
        background: "#E2E8F0",
        border: "1px solid #CFD3DC",
      },
      _disabled: {
        opacity: 0.5,
        border: "1px solid #CFD3DC",
      },
    };
  }

  if (disabled) {
    props = {
      ...props,
      _hover: {},
      _focus: {},
    };
  }

  const sizeProps = {
    sm: { padding: "10px 12px", gap: "8px", height: "40px" },
    md: { padding: "10px 16px", gap: "8px", height: "44px" },
    lg: { padding: "10px 24px", gap: "8px", height: "48px" },
  }[size];

  return (
    <CharkraButton size={size} disabled={disabled} style={sizeProps} {...props}>
      Button
    </CharkraButton>
  );
}
