import React, { useReducer, useEffect } from "react";
import "./App.css";
import Paragraph from "./Paragraph";

function themeChanger(state, action) {
  if (action.type == "theme") {
    console.log("in theme changer");

    return {
      ...state,
      color: state.color === "light" ? "dark" : "light"
    };
  } else {
    // else change font size
  }
}

function App() {
  const [theme, changeTheme] = useReducer(themeChanger, {
    color: "light",
    fontSize: 20
  });

  useEffect(() => {
    console.log(JSON.stringify(theme) + "<== latest theme");
  }, [theme]);

  return (
    <div>
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
