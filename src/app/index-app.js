import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CatPosts from './cat-posts/index';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={CatPosts}/>
      </div>
    );
  }
}

export default App;
