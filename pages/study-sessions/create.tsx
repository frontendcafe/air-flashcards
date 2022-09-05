import React, { ReactNode, useEffect, useState } from "react";

import { Collection } from "@/modules/Collections/models";
import { SliderInput } from "@/modules/shared/components/SliderInput";
import { FormStudySessionData, StudySessionMode as Mode } from "@/modules/StudySession/models";
import { formSchema } from "@/modules/StudySession/schemas";
import useFormWithYup from "@/modules/utils/useFormWithYup";
import { Button, Container, Select, Stack, Text } from "@chakra-ui/react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, children, error }) => {
  return (
    <Stack spacing={4}>
      <Text as="label" variant="label">
        {label}
      </Text>

      <Stack spacing={1}>
        {children}

        {error && <Text color="status.error">{error}</Text>}
      </Stack>
    </Stack>
  );
};

const CreateStudySession: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormWithYup<FormStudySessionData>(formSchema);

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

  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollectionCardAmount, setSelectedCollectionCardAmount] = useState<number>(1);
  const selectedCollectionId = watch("collectionId");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/collections");
      const data = await result.json();
      setCollections(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/collections/${selectedCollectionId}/cards`
      );
      const data = await result.json();
      setSelectedCollectionCardAmount(data.length);
    };

    if (selectedCollectionId) {
      fetchData();
    }
  }, [selectedCollectionId]);

  const onSubmit = (data: FormStudySessionData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Container maxW="container.xl">
      <Stack as="form" py={8} spacing={12} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <FormField label="Mis colecciones" error={errors.collectionId?.message || ""}>
            {/** TODO: use select of design */}
            <Select placeholder="Ingresa la colección" {...register("collectionId")}>
              {collections.map((collection) => {
                return (
                  <option key={collection.id} value={collection.id}>
                    {collection.title}
                  </option>
                );
              })}
            </Select>
          </FormField>
          <SliderInput
            label="Cantidad de tarjetas"
            {...register("cardsAmount")}
            max={selectedCollectionCardAmount}
            min={1}
          />

          <FormField label="Modo" error={errors.mode?.message || ""}>
            <Select placeholder="Ingresa el modo" {...register("mode")}>
              <option value={Mode.JEOPARDY}>Jeopardy</option>
              <option value={Mode.COMBINED}>Combined</option>
              <option value={Mode.NORMAL}>Normal</option>
            </Select>
          </FormField>
        </Stack>

        {/** TODO: should be disabled if some field is not completed */}
        <Button type="submit">Comenzar sesión</Button>
      </Stack>
    </Container>
  );
};

export default CreateStudySession;
