type CardSide = "image" | "text";

export interface CardData {
  createdAt: string;
  sideA: {
    type: CardSide;
    value: string;
  };
  sideB: {
    type: CardSide;
    value: string;
  };
}

export interface Card extends CardData {
  id: string;
}
