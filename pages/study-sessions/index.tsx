import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import AddIcon from "@/modules/shared/components/Icons/Add";
import Menu from "@/modules/shared/components/Menu/Menu";
import StudySessionCard from "@/modules/StudySession/components/StudySessionCard";
import { Center, Container, Grid, GridItem, Select, Text } from "@chakra-ui/react";

const StudySessions: NextPage = () => {
  const router = useRouter();
  const handleDelete = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };

  // TODO: Obtener studysessions del usuario
  // useEffect(() => {
  // getUserStudySessions
  // setStudySessions()
  // }, [])

  const handleCreate = () => {
    router.push("/study-sessions/create");
  };

  return (
    <>
      <Head>
        <title>Study sessions / Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container variant="main">
        {/* TODO: Layout Component */}
        <Menu />
        <Text color="#151F33" fontWeight={600} fontSize="20px" mt="50px">
          Mis rondas de estudio
        </Text>
        <Select placeholder="Recientes" w="142px" borderColor="gray.50" m="26px 0px 45px 0px">
          <option value="option1">Option 1</option>
        </Select>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            desktop: "repeat(3, 1fr)",
          }}
          gap={{ base: "25", lg: "10" }}
          justifyContent="space-between"
        >
          <GridItem
            w={{ desktop: "340px" }}
            cursor="pointer"
            onClick={handleCreate}
            display="flex"
            justifyContent="center"
          >
            <Center
              flexDirection={{ mobile: "row", desktop: "column" }}
              border={{ base: "0", desktop: "2px" }}
              borderColor={{ base: "white", desktop: "gray.50" }}
              width={{ base: "auto", desktop: "320px" }}
              borderRadius="lg"
            >
              <AddIcon width={25} height={25} />
              <Text color="primary.200" fontWeight="400" fontSize="19px" m="10px 6px">
                Crear nueva sesión
              </Text>
            </Center>
          </GridItem>
          {/* ------------MAP con las respectivas props-----------------*/}
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={handleDelete}
            />
          </GridItem>
          {/* -----------------MAP-------------------- */}
          {/* ------------DELETE -------------  */}
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={handleDelete}
            />
          </GridItem>
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={handleDelete}
            />
          </GridItem>
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={handleDelete}
            />
          </GridItem>
          {/* ------------DELETE ------------- */}
        </Grid>
      </Container>
    </>
  );
};

export default StudySessions;
