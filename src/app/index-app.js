import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CatPostsContainer from './cat-posts/container';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={CatPostsContainer}/>
      </div>
    );
  }
}

export default App;
