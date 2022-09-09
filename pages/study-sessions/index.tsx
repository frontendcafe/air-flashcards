import type { NextPage } from "next";
import Head from "next/head";

import StudySessionCard from "@/modules/StudySession/components/StudySessionCard";
import { Center, Container, Grid, GridItem, Text } from "@chakra-ui/react";

const StudySessions: NextPage = () => {
  const deleteFunction = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <Head>
        <title>Study sessions / Flashcards</title>
        <meta name="description" content="Flashcards study app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container variant="main">
        {/* Agregar Menu o TODO: Layout Component */}
        <Text color="#151F33" fontWeight={600} fontSize="20px">
          Mis rondas de estudio
        </Text>
        <Text>recientes</Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            desktop: "repeat(3, 1fr)",
          }}
          gap={{ base: "25", lg: "10" }}
          justifyContent="center"
        >
          <GridItem w="100%">
            <Center>boton de crear</Center>
          </GridItem>
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={deleteFunction}
            />
          </GridItem>
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={deleteFunction}
            />
          </GridItem>
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={deleteFunction}
            />
          </GridItem>
          <GridItem w="100%">
            <StudySessionCard
              id="asd123"
              name="hola"
              cardsAmount={30}
              collection="Medicina"
              percentage={50}
              deleteFunction={deleteFunction}
            />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default StudySessions;
