import React from "react";

import Trash from "@/modules/shared/components/Icons/Trash";
import { Button, Container, Divider, Input, Stack, Text } from "@chakra-ui/react";

const CardForm = ({ index, remove, control, register }: any) => {
  return (
    <Container maxW="container.xl" style={{ padding: 0 }}>
      <Divider />

      <Stack py={8} spacing={12}>
        <Stack spacing={6}>
          <Text variant="label" as="label">
            Tarjeta {index + 1}
          </Text>

          <Text variant="label" as="label">
            Lado A
          </Text>
          <Input
            key={control.id} // important to include key with field's id
            label="Lado A"
            placeholder="Ingrese una pregunta"
            {...register(`cards.${index}.sideA.value`)}
          />

          <Text variant="label" as="label">
            Lado B
          </Text>
          <Input
            key={control.id} // important to include key with field's id
            label="Lado B"
            placeholder="Ingrese una respuesta"
            {...register(`cards.${index}.sideB.value`)}
          />

          <Button
            variant="outline"
            colorScheme="red"
            leftIcon={<Trash color="red" height={20} width={20} />}
            size="sm"
            type="button"
            onClick={() => {
              return remove(index);
            }}
          >
            Borrar
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CardForm;
