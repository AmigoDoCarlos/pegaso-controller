import React, { useState } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import GlobalProvider from "./src/contexts/GlobalContextProvider";
import MainController from "./src/scenes/MainController";
import Settings from "./src/scenes/Settings";
import Start from "./src/scenes/Start";

export type screenType = {
  name: "controller" | "settings",
  component: JSX.Element;
}

export default function App(){

  return (
      <GlobalProvider>
        <NativeRouter>
          <Routes>
            <Route path='/' Component={Start} />
            <Route path='/controller' Component={MainController}/>
            <Route path='/settings' Component={Settings}/>
          </Routes>
        </NativeRouter>
      </GlobalProvider>
  )
}