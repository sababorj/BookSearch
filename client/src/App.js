import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NoMatch from "./pages/Nomatch";
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
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
