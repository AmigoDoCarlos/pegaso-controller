import React from "react";
import MainController from "./src/scenes/MainController";
import GlobalProvider from "./src/contexts/GlobalContextProvider";

export default function App(){
  return (
    <GlobalProvider>
      <MainController/>
    </GlobalProvider>
  )
}