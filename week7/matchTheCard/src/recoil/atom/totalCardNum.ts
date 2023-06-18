import { atom } from "recoil";

export const totalCardNum = atom<number>({
  key: "totalCardNum",
  default: 5,
});
