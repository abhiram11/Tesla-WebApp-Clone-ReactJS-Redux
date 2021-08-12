import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

//3:50:00 how to stretch header on top, what is position fixed for header, etc.
// 3:55:00 flex column!!!!
// 4:12:00 flex-grow: 1 !!!
//4:16:00 downarrow animation in index.css!

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
