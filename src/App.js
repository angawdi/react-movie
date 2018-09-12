import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmDetails />
          <FilmListing />
        </div>
      </div>
    );
  }
}

export default App;
