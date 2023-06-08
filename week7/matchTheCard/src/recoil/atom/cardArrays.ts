import { atom } from "recoil";

export const totalCards = atom<string[]>({
  key: "totalCards",
  default: [],
});

export const currentCards = atom<number[]>({
  key: "currentCards",
  default: [],
});

export const matchedCards = atom<number[]>({
  key: "matchedCard",
  default: [],
});
