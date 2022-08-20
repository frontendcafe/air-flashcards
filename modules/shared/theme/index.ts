import { extendTheme, Theme } from "@chakra-ui/react";

interface CustomColors extends Partial<Omit<Theme["colors"], 'gray'>> {
  primary: Record<number, string>;
  gray: Record<number, string>;
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
  gray: {
    50: '#CFD4DC',
    100: '#A7B0C0',
    200: '#768298',
    300: '#425372',
    400: '#1E3359',
    500: '#18253D',
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
        _hover: {
          backgroundColor: "primary.200",
        },
        _focus: {
          backgroundColor: "primary.300"
        },
        _disabled: {
          backgroundColor: "primary.50"
        }
      },
    },
    defaultProps: {
      variant: "primary",
      size: "md",
    },
  },
};

const fonts: Theme["fonts"] = {
  heading: `'"Work Sans", sans-serif`,
  body: `"Work Sans", sans-serif`,
  mono: `"Work Sans", sans-serif`
};

export const theme = extendTheme({ colors, components, fonts });
