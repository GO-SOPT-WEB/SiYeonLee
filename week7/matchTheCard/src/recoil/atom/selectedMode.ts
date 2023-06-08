import { atom } from "recoil";

export const selectedMode = atom<string>({
  key: "selectedMode",
  default: "EASY",
});
