import { extendTheme, Theme } from "@chakra-ui/react";

type CustomColors = Partial<Theme["colors"]> & {
  primary: Record<number, string>;
  status: {
    error: string;
    success: string;
  };
};

const colors: CustomColors = {
  primary: {
    50: "#C5D8FF",
    100: "#1867FF",
    200: "#0E52D7",
    300: "#0D378D",
  },
  status: {
    error: "#E53E3E",
    success: "#3FB63D",
  },
};

const components: Theme["components"] = {
  Button: {
    baseStyle: {
      height: "auto",
      width: "auto",
    },
    sizes: {
      sm: {
        padding: "6px 12px",
      },
      md: {
        padding: "8px 16px",
      },
      lg: {
        padding: "10px 24px",
      },
    },
    variants: {
      primary: {
        backgroundColor: "primary.100",
        color: "white",
      },
    },
    defaultProps: {
      variant: "primary",
      size: "md",
    },
  },
};

export const theme = extendTheme({ colors, components });
