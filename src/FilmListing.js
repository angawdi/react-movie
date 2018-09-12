import React, { Component } from 'react';

export default class FilmListing extends Component {
	render() {
		const allFilms = this.props.films.map( (film) => (<h1>{film.title}</h1>));
		return (
			<div className="film-list">
				<h1 className="section-title">FILMS</h1>
				<h1>{allFilms}</h1>
			</div>
		);
	}
}