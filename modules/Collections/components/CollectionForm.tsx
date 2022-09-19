import React from "react";
import { useRouter } from "next/router";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { useAuth } from "@/modules/Auth/context/AuthProvider";
import CardForm from "@/modules/Cards/components/CardForm";
import { CardData } from "@/modules/Cards/models";
import Select from "@/modules/shared/components/Select";
import TextField from "@/modules/shared/components/TextField";
import { Button, Center, Container, Stack, Text } from "@chakra-ui/react";

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
  const navigate = useRouter();
  const { control, register, handleSubmit } = useForm<CollectionForm>({
    defaultValues: {
      title: "",
      description: "",
      cards: [{ sideA: { type: "text", value: "" }, sideB: { type: "text", value: "" } }],
      category: "",
    },
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
  });

  const onSubmit = async (data: CollectionForm) => {
    try {
      await fetch("/api/collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          userId: auth.user.uid || auth.user.user.uid,
          tags: data.category ? [data.category] : [],
        }),
      });

      navigate.push("/");
    } catch (error) {
      window.alert("ERROR :(");
    }
  };
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
                    control={field}
                    update={update}
                    index={index}
                    value={field}
                    remove={remove}
                    register={register}
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
