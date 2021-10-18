import React, { Component } from 'react';
import Home from './components/Home';
import User from './components/Users'
import About from "./components/About";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Route exact path="/" render={(props) => <Home {...props}/>}/>
        <Route path="/about" render={(props) => <About {...props} /> }/>
        <Route path="/users/:id" render={(props) => <User {...props} greetingsMessage="Good Morning"  />} />
      </BrowserRouter>
      </>
    );
  }
}

export default App;
