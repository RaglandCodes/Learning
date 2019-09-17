// @flow

import React, { useReducer, useEffect } from "react";

//import { jss } from "react-jss";
import "./App.css";
import Paragraph from "./Paragraph";
import { numberLiteralTypeAnnotation } from "@babel/types";

type stateType = {
  color: string,
  fontSize: number
}


type actionType = {
  type: string,
  payload?: string
}
function themeChanger(state: stateType, action: actionType): stateType {
  if (action.type == "theme") {
    console.log("in theme changer");

    return {
      ...state,
      color: state.color === "light" ? "dark" : "light"
    };
  } else {
    return state;
  }
}

function App() {
  const [theme, changeTheme] = useReducer((themeChanger), ({
    color: "light",
    fontSize: 20
  }));

  // useEffect(() => {
  //   console.log(JSON.stringify(theme) + "<== latest theme");
  // }, [theme]);

  // useEffect(() => {

  // }, [])
  return (
    <div id="App">
      This is the parent element
      <Paragraph text="heello" />
      <Paragraph text="heello again" />
      <Paragraph text="heello bye bye" />
      <Paragraph text="heello see you tomorrow" />
      <button onClick={() => changeTheme({ type: "theme" })}>
        {" "}
        Toggle theme{" "}
      </button>
      <br />
      <button onClick={() => changeTheme({ type: "size", payload: "plus" })}>
        +
      </button>
      Font Size
      <button onClick={() => changeTheme({ type: "size", payload: "minus" })}>
        -
      </button>
    </div>
  );
}

export default App;
