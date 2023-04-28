import styled from "styled-components";
import Mode from "./Mode";
import { useState } from "react";

function Body({ mode, children }) {
  //   const [mode, setMode] = useState("");

  //   function handleModeChange(e) {
  //     setMode(e.target.value);
  //   }
  //   console.log(mode);

  return (
    <>
      {mode}
      {children}
    </>
  );
}

export default Body;
