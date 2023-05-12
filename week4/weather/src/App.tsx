import { styled } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  return (
    <MainArea>
      <Header />
      <Router />
    </MainArea>
  );
}

export default App;

const MainArea = styled.section`
  display: flex;
  flex-direction: column;
`;
