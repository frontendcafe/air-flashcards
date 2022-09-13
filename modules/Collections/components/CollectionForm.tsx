import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { useAuth } from "@/modules/Auth/context/AuthProvider";
import CardForm from "@/modules/Cards/components/CardForm";
import { CardData } from "@/modules/Cards/models";
import Select from "@/modules/shared/components/Select";
import TextField from "@/modules/shared/components/TextField";
import { Button, Center, Container, Stack, Text } from "@chakra-ui/react";

import { CollectionFirebaseData } from "../models";
import { createCollectionSchema } from "../schema";
import { categories } from "../utils/categories";

interface CollectionForm {
  title: string;
  description: string;
  category: string;
  cards: CardData[];
}

const fieldArrayName = "cards";

// { sideA: { type: "text", value: "" }, sideB: { type: "text", value: "" } }
const CollectionForm = () => {
  const auth = useAuth() as any;
  const { control, handleSubmit } = useForm<CollectionForm>({
    defaultValues: {
      title: "",
      description: "",
      cards: [{ sideA: { type: "text", value: "ladoA" }, sideB: { type: "text", value: "LADOb" } }],
      category: "",
    },
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
  });

  const onSubmit = async (data: CollectionForm) => {

    try {
      let result = await fetch("/api/collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          userId: auth.user.uid
        }),
      });
      result = await result.json();
      window.alert("Collection created");
      return result;
    } catch (error) {
      window.alert("ERROR :(");
      return null;
    }
  };

  // const watchFieldArray = watch(fieldArrayName);
  // const controlledFields = fields.map((field, index) => {
  //   return {
  //     ...field,
  //     ...watchFieldArray[index],
  //   };
  // });

  return (
    <Container maxW="container.xl">
      <Center>
        <Stack as="form" py={8} spacing={12} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <TextField
                    label="Título"
                    placeholder="Ingresa un título"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <Select label="Categoria" option={categories} onChange={onChange} value={value} />
                );
              }}
            />

            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <TextField
                    label="Descripción"
                    placeholder="Ingrese una descripción"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            {fields.length ? <Text variant="label">Crear Tarjetas</Text> : null}

            {fields.map((field, index) => {
              return (
                <fieldset key={field.id}>
                  <CardForm
                    control={control}
                    update={update}
                    index={index}
                    value={field}
                    remove={remove}
                  />
                </fieldset>
              );
            })}

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                append({
                  sideA: { value: "", type: "text" },
                  sideB: { value: "", type: "text" },
                });
              }}
            >
              Añadir tarjeta
            </Button>
          </Stack>

          <Button type="submit">Crear coleccion</Button>
        </Stack>
      </Center>
    </Container>
  );
};

export default CollectionForm;
