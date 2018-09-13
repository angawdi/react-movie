import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {
	handleFilterClick = (filter) => {
		console.log('setting filter to ', filter);
	} 
	render() {
		const allFilms = this.props.films.map( (film) => (<FilmRow film={film}/>));
		return (
			<div className="film-list">
				<h1 className="section-title">FILMS</h1>
				<h1>{allFilms}</h1>
			</div>
		);
	}
}