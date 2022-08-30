import React from "react";
import { Box, Textarea, useBoolean } from "@chakra-ui/react";

interface TextFiedProps {
  label: string;
  placeholder: string;
  textarea: boolean;
}

const prueba = () => {
  return <TextField label="Test" placeholder="Testing" textarea={false} />;
};

const TextField: React.FC<TextFiedProps> = ({ label, placeholder, textarea }) => {
  const [flag, setFlag] = useBoolean(textarea);
  return (
    <>
      <Box>
        <label onClick={setFlag.on} onDoubleClick={setFlag.off} htmlFor="textfield">
          {label}
        </label>

        {flag ? (
          <Textarea placeholder={placeholder} size="m" resize="none" />
        ) : (
          <input type="hidden"></input>
        )}
      </Box>
    </>
  );
};

export default prueba;
