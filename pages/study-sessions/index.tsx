import type { NextPage } from "next";
import Head from "next/head";

import Menu from "@/modules/shared/components/Menu/Menu";
import StudySessionCard from "@/modules/StudySession/components/StudySessionCard";
import { Center, Container, Grid, GridItem, Select, Text } from "@chakra-ui/react";

const StudySessions: NextPage = () => {
  const deleteFunction = (id: string) => {
    console.log(id);
  };

  // TODO: Obtener studysessions del usuario
  // useEffect(() => {
  // getUserStudySessions
  // setStudySessions()
  // }, [])

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
