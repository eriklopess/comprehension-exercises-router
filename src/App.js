import React, { Component } from 'react';
import Home from './components/Home';
import User from './components/Users'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user/:id" render={(props) => <User {...props} greetingsMessage="Good Morning"  />} />
      </BrowserRouter>
      </>
    );
  }
}

export default App;
