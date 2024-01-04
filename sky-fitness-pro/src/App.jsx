import React from "react";
import './App.css';
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    @font-face {
      font-family: 'StratosSkyeng';
      src: local("StratosSkyeng"), local("StratosSkyeng"), url("/fonts/StratosSkyeng.woff2") format("woff2"), url("/fonts/StratosSkyeng.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
