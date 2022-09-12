import { Container, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CardData } from "../models";
import { useForm, Controller } from "react-hook-form";
import TextField from "@/modules/shared/components/TextField";

const CardForm = ({ update, index, value, remove, control }: any) => {
  const { handleSubmit } = useForm<CardData>({
    defaultValues: value,
  });
  // const { handleSubmit } = useFormWithYup<CardData>(cardDataSchema);

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Container maxW="container.xl">
      <Divider />

      <Stack py={8} spacing={12} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <Text variant="label" as="label">
            Tarjeta número {index + 1}
          </Text>

          <Controller
            control={control}
            name="sideA"
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                label="Lado A"
                placeholder="Ingrese una pregunta"
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="sideB"
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                label="Lado B"
                placeholder="Ingrese una pregunta"
                onChange={onChange}
                value={value}
              />
            )}
          />

          <button
            type="button"
            onClick={handleSubmit((data) => {
              update(index, data);
            })}
          >
            guardar tarjeta
          </button>
          <button className="remove" type="button" onClick={() => remove(index)}>
            Borrar
          </button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CardForm;
