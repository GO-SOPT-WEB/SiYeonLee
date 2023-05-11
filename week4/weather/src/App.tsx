import { styled } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

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
      <Main />
    </MainArea>
  );
}

export default App;

const MainArea = styled.section`
  display: flex;
  flex-direction: column;
`;
