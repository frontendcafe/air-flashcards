import React, { MouseEventHandler } from "react";
import { background, Button as CharkraButton, useMultiStyleConfig } from "@chakra-ui/react";

interface ButtonProps {
  size: string;
  light?: boolean;
  outline?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
}

export default function Button({
  size = "md",
  light,
  outline,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  let variant = light ? "light" : "primary";
  let styles = useMultiStyleConfig("Button", { size, variant });

  if (outline) {
    variant = "outlined";
    const outlinedStyles = useMultiStyleConfig("Button", { size, variant });
    styles = {
      ...styles,
      ...outlinedStyles,
    };
  }

  return (
    <CharkraButton onClick={onClick} disabled={disabled} __css={styles}>
      {children}
    </CharkraButton>
  );
}
