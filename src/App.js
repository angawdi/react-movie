import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
        <div className="film-library">
          <FilmListing films = {TMDB.films}/>
          <FilmDetails films = {TMDB.films}/>
        </div>
    );
  }
}

export default App;


// https://github.com/WDI-SEA/react_intro_global/blob/master/12-film-1-components.md