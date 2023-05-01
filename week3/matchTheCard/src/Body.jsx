import styled from "styled-components";
import Mode from "./Mode";
import { useState } from "react";

function Body({ mode, children }) {
  return (
    <>
      {mode}
      {children}
    </>
  );
}

export default Body;
