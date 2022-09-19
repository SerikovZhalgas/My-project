import React from 'react';
import './App.css';
import {Pages} from "./UI/Pages/Pages";
import {Header} from "./UI/Header/Header";
import {HashRouter} from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Pages/>
      </HashRouter>
    </div>
  );
}

export default App;
