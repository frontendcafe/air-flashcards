import { extendTheme, Theme } from "@chakra-ui/react";

interface CustomColors extends Partial<Omit<Theme["colors"], "gray">> {
  primary: Record<number, string>;
  gray: Record<number, string>;
  label: Record<number, string>;
  disabled: Record<string, string>;
  status: {
    error: string;
    success: string;
  };
}

const colors: CustomColors = {
  primary: {
    50: "#C5D8FF",
    100: "#1867FF",
    200: "#0E52D7",
    300: "#0D378D",
  },
  gray: {
    50: "#CFD4DC",
    100: "#A7B0C0",
    200: "#768298",
    300: "#425372",
    400: "#1E3359",
    500: "#18253D",
  },
  disabled: {
    primary: "#8CB3FF",
  },
  status: {
    error: "#E53E3E",
    success: "#3FB63D",
  },
  label: {
    50: "#18253D",
  },
};

const components: Theme["components"] = {
  Text: {
    variants: {
      menu: {
        textAlign: "center",
        color: "white",
        fontWeight: 500,
        fontSize: "1.5rem",
        marginTop: "45px",
      },
    },
  },

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
          backgroundColor: "primary.300",
        },
        _disabled: {
          backgroundColor: "disabled.primary !important",
        },
      },
      secondary: {
        backgroundColor: "gray.50",
        color: "#0D378D",
        _hover: {
          backgroundColor: "gray.100",
        },
        _focus: {
          backgroundColor: "gray.200",
        },
      },
    },
    defaultProps: {
      variant: "primary",
      size: "md",
    },
  },

  Text: {
    variants: {
      label: {
        color: "label.50",
        fontWeight: 600,
        fontSize: "18px",
      },
    },
  },

  Textarea: {
    // style object for base or default style
    baseStyle: {
      height: "48px",
      width: "320px",
      px: 4,
      py: 2.5,
      fontSize: "18px",
      borderRadius: "md",
      _placeholder: { color: "gray.100" },
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
      primary: {
        color: "gray.100",
        border: "1px",
        borderColor: "gray.100",
        _hover: {
          border: "1px",
          borderColor: "gray.50",
        },
        _focus: {
          border: "2px",
          borderColor: "primary.100",
        },
      },
      invalid: {
        color: "gray.100",
        border: "2px",
        borderColor: "status.error",
      },
      disabled: {
        color: "red",
        border: "1px",
        borderColor: "status.error",
      },
    },
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {
      variant: "primary",
      size: "md",
    },
  },

  Input: {
    // style object for base or default style
    baseStyle: {
      field: {
        height: "40px",
        width: "320px",
        color: "gray.200",
        border: "1px solid",
      },
    },
    sizes: {},
    variants: {
      primary: {
        field: {
          borderColor: "gray.200",
          _hover: { borderColor: "gray.300" },
          _focus: {
            border: "2px",
            borderColor: "primary.100",
          },
        },
      },
      invalid: {
        field: {
          border: "2px solid",
          borderColor: "status.error",
        },
      },
      disabled: {
        field: {
          opacity: 0.5,
          borderColor: "gray.200",
          cursor: "not-allowed",
        },
      },
    },

    defaultProps: {
      variant: "primary",
    },
  },
};

const fonts: Theme["fonts"] = {
  heading: `"Work sans", sans-serif`,
  body: `"Work sans", sans-serif`,
  mono: `"Work sans", sans-serif`,
};

const config: Theme["config"] = {
  initialColorMode: "light",
  cssVarPrefix: "air-flashcards",
  useSystemColorMode: false,
};

export const theme = extendTheme({ colors, components, fonts, config });
