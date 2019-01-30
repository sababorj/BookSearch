import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import Save from "./pages/Save";
import Search from "./pages/Search"
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/save" component={Save} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
