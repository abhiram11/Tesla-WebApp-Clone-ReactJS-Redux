import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

//3:50:00 how to stretch header on top, what is position fixed for header, etc.
// 3:55:00 flex column!!!!
// 4:12:00 flex-grow: 1 !!!
//4:16:00 downarrow animation in index.css!
// 5: 30:00 burgerNav, everything related to it is important!
// 4:40:00 on off animation for the burger navigation!
// 4:51:00 using @media query to show/hide n do other things for mobile n other devices

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
