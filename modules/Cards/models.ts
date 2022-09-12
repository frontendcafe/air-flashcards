export type CardeSideType = "text" | "image";

interface CardSide {
  type: CardeSideType;
  value: string;
}

export interface CardData {
  name?: string;
  createdAt?: string;
  sideA: CardSide;
  sideB: CardSide;
}

export interface Card extends CardData {
  id: string;
}
