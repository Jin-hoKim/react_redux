import React from "react";
import ReactDOM from "react-dom";
import Lines from "react-lines-ellipsis";
import Counter from "./Counter";
import { createStore } from "redux";

import "./styles.css";

function App() {
  const message = "sdfasdfas";
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Lines text={message} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
