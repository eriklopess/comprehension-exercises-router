import React, { Component } from 'react';
import Home from './components/Home';
import User from './components/Users'
import About from "./components/About";
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props}/>}/>
            <Route path="/about" render={(props) => <About {...props} /> }/>
            <Route path="/users/:username/:password" render={(props) => <User {...props} greetingsMessage="Good Morning"  />} />
            <Route path="/strict-access"><Redirect to="/users/joao/1234"/></Route>

          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
