import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>App</h1> */}
        <Nav />

        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/about"  exact component={About} />
          <Route path="/shop"  exact component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  
  
  return <h1>Home</h1>;
}
export default App;
