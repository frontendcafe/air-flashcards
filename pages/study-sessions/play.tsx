/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Card } from "@/modules/Cards/models";
import GameAnswer from "@/modules/StudySession/components/GameAnswer";
import { GameCard } from "@/modules/StudySession/components/GameCard";
import GameStatus from "@/modules/StudySession/components/GameStatus";
import ResumeGame from "@/modules/StudySession/components/ResumeGame";
import { StudySessionMode } from "@/modules/StudySession/models";
import { Box, Container, Stack } from "@chakra-ui/react";

const parseToGameCardSide = (side: Card["sideA"] | undefined) => {
  if (!side) {
    return undefined;
  }

  return {
    text: side.type === "image" ? "" : side.value,
    image: side.type === "image" ? side.value : "",
  };
};

const shuffleAndSlice = (array: Card[], cardAmount: number) => {
  const newArray = array;

  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    // eslint-disable-next-line no-plusplus
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray.slice(0, cardAmount);
};

const randomizeMode = (): StudySessionMode.NORMAL | StudySessionMode.JEOPARDY => {
  return Math.random() > 0.5 ? StudySessionMode.NORMAL : StudySessionMode.JEOPARDY;
};

const PlayStudySession: React.FC<any> = ({ cards }) => {
  const router = useRouter();

  const { collectionId, cardsAmount, mode: modeQuery } = router.query;

  const initialMode =
    (modeQuery as StudySessionMode) === StudySessionMode.COMBINED
      ? randomizeMode()
      : (modeQuery as StudySessionMode);

  const [mode, setMode] = useState<StudySessionMode.JEOPARDY | StudySessionMode.NORMAL>(
    initialMode as StudySessionMode.JEOPARDY | StudySessionMode.NORMAL
  );

  const [random, setCards] = useState<Card[]>([]);

  const [cardFlipped, setCardFlipped] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = cards[currentIndex];

  const [isLoading, setIsLoading] = useState(true);
  const [areError, setAreError] = useState(false);

  const [answers, setAnswers] = useState<{
    correct: string[];
    incorrect: string[];
  }>({
    correct: [],
    incorrect: [],
  });

  const handleAnswers = (type: "correct" | "incorrect") => {
    setAnswers({
      ...answers,
      [type]: [...answers[type], currentCard.id],
    });

    if (modeQuery === StudySessionMode.COMBINED) {
      setMode(randomizeMode());
    }

    setCurrentIndex(currentIndex + 1);
    setCardFlipped(false);
  };

  useEffect(() => {
    if (!cards.length) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const result = await fetch(`/api/collections/${collectionId}/cards`);
          const data = await result.json();

          const parsedCards = shuffleAndSlice(data, Number(cardsAmount));

          setCards(parsedCards);
        } catch (_) {
          setAreError(true);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, []);

  const sideA = parseToGameCardSide(
    mode === StudySessionMode.JEOPARDY ? currentCard?.sideB : currentCard?.sideA
  );
  const sideB = parseToGameCardSide(
    mode === StudySessionMode.JEOPARDY ? currentCard?.sideA : currentCard?.sideB
  );

  return (
    <Box minH="100vh">
      <Container maxW="container.xl" m="auto">
        {areError && <Box>Error</Box>}
        {!areError && (
          <Stack spacing={4} maxW={330} mx="auto">
            <GameStatus
              correct={answers.correct.length}
              incorrect={answers.incorrect.length}
              total={cards.length}
            />

            {currentIndex < cards.length && sideA && sideB ? (
              <>
                <GameCard
                  sideA={sideA}
                  sideB={sideB}
                  onClick={() => {
                    if (!cardFlipped) {
                      setCardFlipped(!cardFlipped);
                    }
                  }}
                  flipped={cardFlipped}
                />

                <GameAnswer
                  disabled={!cardFlipped}
                  onClick={{
                    correct: () => {
                      return handleAnswers("correct");
                    },
                    incorrect: () => {
                      return handleAnswers("incorrect");
                    },
                  }}
                />
              </>
            ) : (
              <ResumeGame
                correct={answers.correct.length}
                incorrect={answers.incorrect.length}
                total={cards.length}
                onNavigate={() => {
                  router.push("/");
                }}
                onRestart={() => {
                  setCurrentIndex(0);
                  setAnswers({
                    correct: [],
                    incorrect: [],
                  });
                }}
              />
            )}
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async ({ query }) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${query!.collectionId!}/cards`
  );
  const data = await result.json();

  const parsedCards = shuffleAndSlice(data, Number(query!.cardsAmount));

  return {
    props: {
      cards: parsedCards,
    },
  };
};

export default PlayStudySession;
