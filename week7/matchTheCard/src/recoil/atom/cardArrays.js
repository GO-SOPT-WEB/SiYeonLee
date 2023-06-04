import { atom } from "recoil";

export const totalCards = atom({
  key: "totalCards",
  default: [],
});

export const currentCards = atom({
  key: "currentCards",
  default: [],
});

export const matchedCards = atom({
  key: "matchedCard",
  default: [],
});
