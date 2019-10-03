import React from "react";
import "./App.css";
import { LandingPage } from "./LandingPage";
import { AppLayout } from "./AppLaout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <h1>React Protected Route </h1>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/app" component={AppLayout} />
      {/* <Route path="*" component={() => "NOT FOUND"} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
