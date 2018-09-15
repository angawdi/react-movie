import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter: 'all',
			faves: []
		}
	}

	handleFaveToggle = (film) => {
		const newFaves = this.state.faves.slice();
		const filmIndex = this.state.faves.indexOf(film);
		console.log("filmIndex", filmIndex);
		if(filmIndex < 0) {
			console.log(`Adding ${film.title} to faves...`);
			newFaves.push(film);
		} else {
			newFaves.splice(filmIndex, 1);
			console.log(`Removing ${film.title} from faves...`);
		}
		this.setState({faves: newFaves});
	}

	handleFilterClick = (filter) => {
		this.setState({
			filter: filter
		});
		console.log('setting filter to ', filter);
	} 
	render() {
		let allFilms = this.props.films.map( film => {
			return (
				<FilmRow film={film} />
			);
		});
		return (
		<div className="film-list">
    		<h1 className="section-title">FILMS</h1>
    		<div className="film-list-filters">
        		<div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick= {() => this.handleFilterClick('all')}>
        			ALL
            		<span className="section-count">{this.props.films.length}</span>
        		</div>

        	<div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick= { () => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        	</div>
    	</div>

    	{allFilms}
    	</div>
		);
	}
}