import TextField from "@/modules/shared/components/TextField";
import Select from "@/modules/shared/components/Select";
import { Button, Container, Stack } from "@chakra-ui/react";
import React from "react";
import useFormWithYup from "@/modules/utils/useFormWithYup";
import { CollectionFirebaseData } from "../models";
import { createCollectionSchema } from "../schema";
import { categories } from "../utils/categories";
// import { Collection } from "@/modules/Collections/models";

const CollectionForm = () => {
  const { handleSubmit } = useFormWithYup<CollectionFirebaseData>(createCollectionSchema);

  // const onSubmit = async (data: CreateStudySessionData) => {
  //   try {
  //     let result = await fetch("/api/study-sessions", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     result = await result.json();
  //     window.alert("Study Session Created :D");
  //     return result;
  //   } catch (error) {
  //     window.alert("ERROr :(");
  //     return null;
  //   }
  // };

  const onSubmit = async (data: CollectionFirebaseData) => {
    console.log("collection submit", data);
  };

  return (
    <Container maxW="container.xl">
      <Stack as="form" py={8} spacing={12} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <TextField label="Título" placeholder="Ingresa un título" />

          <TextField label="Descripción" placeholder="Ingresa una descripción" textarea />

          <Select label="Categoría" option={categories} />

          {/* <TextField label="Etiquetas (Opcional)" placeholder="Agrega etiquetas" /> */}
        </Stack>

        <Button type="submit">Crear coleccion</Button>
        <Button type="button" variant="outline">
          Añadir tarjeta
        </Button>
      </Stack>
    </Container>
  );
};

export default CollectionForm;
