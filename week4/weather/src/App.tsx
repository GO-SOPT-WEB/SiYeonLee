import { useEffect, useState } from "react";
import "./App.css";
import { Comp } from "./Comp";
import axios from "axios";
// import Main from "./components/Main";
import Header from "./components/Header";
import { styled } from "styled-components";

// interface TodayWeatherResponse {
//   cod: string;
//   message: number;
//   cnt: number;
//   list: {
//     dt: number;
//   }[];
// }

function App() {
  // const [count, setCount] = useState<number>(0);
  // const [response, setResponse] = useState<TodayWeatherResponse | null>(null);

  // useEffect(() => {
  //   axios.get<TodayWeatherResponse>("/asdfasdfasdf").then((r) => {
  //     setResponse(r.data);
  //   });
  // }, []);

  return (
    <MainArea>
      <Header />
      <div>
        <body>body </body>
      </div>
      {/* <Comp value="클릭" onClick={onclick} /> */}
    </MainArea>
  );
}

export default App;

const MainArea = styled.section`
  display: flex;
  flex-direction: column;
`;
