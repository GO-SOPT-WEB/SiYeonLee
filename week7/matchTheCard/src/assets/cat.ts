import cat1 from "./images/cat1.jpeg";
import cat2 from "./images/cat2.jpeg";
import cat3 from "./images/cat3.jpeg";
import cat4 from "./images/cat4.jpeg";
import cat5 from "./images/cat5.jpeg";
import cat6 from "./images/cat6.jpeg";
import cat7 from "./images/cat7.jpeg";
import cat8 from "./images/cat8.png";
import cat9 from "./images/cat9.jpeg";

export interface catInfo {
  name: string;
  src: string;
}
const cat: catInfo[] = [
  {
    name: "cat1",
    src: cat1,
  },
  {
    name: "cat2",
    src: cat2,
  },
  {
    name: "cat3",
    src: cat3,
  },
  {
    name: "cat4",
    src: cat4,
  },
  {
    name: "cat5",
    src: cat5,
  },
  {
    name: "cat6",
    src: cat6,
  },
  {
    name: "cat7",
    src: cat7,
  },
  {
    name: "cat8",
    src: cat8,
  },
  {
    name: "cat9",
    src: cat9,
  },
];

export default cat;
