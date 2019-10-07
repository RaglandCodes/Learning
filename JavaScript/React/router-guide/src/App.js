// https://github.com/techsithgit/react-router
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// Use activeStle prop with NavLink
function App() {
  let aaaa = true;
  return (
    <Router>
      <div className="App">
        A<a href="https://youtu.be/XRfD8xIOroA">A</a>
      </div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/user/ragland">Ragland</Link>

      <Route
        exact
        path="/"
        render={() => {
          return <h1>Hello home</h1>;
        }}
      />
      <Prompt
        when={aaaa}
        message={location => {
          return location.pathname.startsWith('/user') ? 'Are ou sure' : true;
        }}
      />
      <Route
        exact
        strict
        path="/about"
        render={() => {
          return <h1>About home</h1>;
        }}
      />

      <Route exact strict path="/user/:userName" component={User} />
    </Router>
  );
}

function User({ match }) {
  // console.log(`${JSON.stringify(match.params.userName)} <== name\n\n`);
  // console.log(`${JSON.stringify(match)} <== name\n\n`);

  return <h1>Welcome user {match.params.userName}</h1>;
}
export default App;
