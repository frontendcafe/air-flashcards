import React from "react";

import Select from "@/modules/shared/components/Select";
import TextField from "@/modules/shared/components/TextField";
// import { Collection } from "@/modules/Collections/models";
import { FormStudySessionData } from "@/modules/StudySession/models"; // StudySessionMode as Mode
import { formSchema } from "@/modules/StudySession/schemas";
import useFormWithYup from "@/modules/utils/useFormWithYup";
import { Button, Container, Stack } from "@chakra-ui/react";

// interface FormFieldProps {
//   label: string;
//   children: ReactNode;
//   error: string;
// }

// const FormField: React.FC<FormFieldProps> = ({ label, children, error }) => {
//   return (
//     <Stack spacing={4}>
//       <Text as="label" variant="label">
//         {label}
//       </Text>

//       <Stack spacing={1}>
//         {children}

//         {error && <Text color="status.error">{error}</Text>}
//       </Stack>
//     </Stack>
//   );
// };

const CreateCollection: React.FC = () => {
  const { handleSubmit } = useFormWithYup<FormStudySessionData>(formSchema);

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

  // const [collections, setCollections] = useState<Collection[]>([]);
  // const [selectedCollectionCardAmount, setSelectedCollectionCardAmount] = useState<number>(1);
  // const selectedCollectionId = watch("collectionId");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("/api/collections");
  //     const data = await result.json();
  //     setCollections(data);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/collections/${selectedCollectionId}/cards`
  //     );
  //     const data = await result.json();
  //     setSelectedCollectionCardAmount(data.length);
  //   };

  //   if (selectedCollectionId) {
  //     fetchData();
  //   }
  // }, [selectedCollectionId]);

  const onSubmit = (data: FormStudySessionData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Container maxW="container.xl">
      <Stack as="form" py={8} spacing={12} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <TextField label="Título" placeholder="Ingresa un título" />

          <TextField label="Descripción" placeholder="Ingresa una descripción" textarea />

          <Select label="Categoría" option={["1", "2"]} />

          <TextField label="Etiquetas (Opcional)" placeholder="Agrega etiquetas" />

          {/* <FormField label="Modo" error={errors.mode?.message || ""}>
            <Select placeholder="Ingresa el modo" {...register("mode")}>
              <option value={Mode.JEOPARDY}>Jeopardy</option>
              <option value={Mode.COMBINED}>Combined</option>
              <option value={Mode.NORMAL}>Normal</option>
            </Select>
          </FormField> */}
        </Stack>

        {/** TODO: should be disabled if some field is not completed */}
        <Button type="submit">Crear coleccion</Button>
        <Button type="button" variant="outline">
          Añadir tarjeta
        </Button>
      </Stack>
    </Container>
  );
};

export default CreateCollection;
