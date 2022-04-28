// import logo from './logo.svg';
import React from "react";
import { GlobalStyle } from "@styles";
import AppRouter from "@components/AppRouter";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRouter />
    </div>
  );
};

export default App;
