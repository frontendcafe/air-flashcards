import React from 'react';
import { GetServerSideProps } from 'next';

import { Card } from "@/modules/Cards/models";

interface CardsProps {
  cards: Card[];
}

const Cards = ({ cards }: CardsProps) => {
  return cards.length ? (
    <div>
      {cards.map(({ name }) => { return <p key={name}>{name}</p>; })}
    </div>
  ) : (
    <p>La coleccion no tiene tarjetas!</p>
  );
};

export const getServerSideProps: GetServerSideProps<CardsProps> = async ({ params }) => {
  const cardsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${params?.id}/cards`);

  if (cardsResponse.status === 404) {
    return { notFound: true };
  }

  const cards = await cardsResponse.json();

  return {
    props: {
      cards
    }
  };
};

export default Cards;
