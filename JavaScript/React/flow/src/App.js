// @flow

import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import * as React from "react";
import { useReducer, useEffect } from "react";
import "./App.css";
import Paragraph from "./Paragraph";
import Users from "./People";
//import { numberLiteralTypeAnnotation } from "@babel/types";

type stateType = {
  color: string,
  fontSize: number
};

type actionType = {
  type: string,
  payload?: string
};

const client = new GraphQLClient({
  url: "https://api.graph.cool/simple/v1/cjl5kyymsba5a0192mamppugb"
});

function themeChanger(state: stateType, action: actionType): stateType {
  if (action.type === "theme") {
    console.log("in theme changer");

    return {
      ...state,
      color: state.color === "light" ? "dark" : "light"
    };
  } else {
    if(action.payload === 'plus')
    {
      return{
        ...state,
        fontSize: state.fontSize + 1
      }
    }
    else
    {
      return{
        ...state,
        fontSize: state.fontSize - 1
      }
    }
    
  }
}

const useStyles = makeStyles({
  title: {
    fontSize: "55px",
    color: "teal"
  }
});

function App(): React.Node {
  const classes = useStyles();
  const [theme, changeTheme] = useReducer(themeChanger, {
    color: "light",
    fontSize: 20
  });

  // useEffect(() => {
  //   console.log(JSON.stringify(theme) + "<== latest theme");
  // }, [theme]);

  // useEffect(() => {

  // }, [])
  return (
    <ClientContext.Provider value={client}>
      <ThemeProvider theme={theme}>
        <div id="App">
          <h2 className={classes.title}>This is the title</h2>
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
          <button
            onClick={() => changeTheme({ type: "size", payload: "plus" })}
          >
            +
          </button>
          Font Size
          <button
            onClick={() => changeTheme({ type: "size", payload: "minus" })}
          >
            -
          </button>
          <Users />
        </div>
      </ThemeProvider>
    </ClientContext.Provider>
  );
}

export default App;
