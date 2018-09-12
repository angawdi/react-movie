import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

export default class FilmRow extends Component {
	render() {
		return (
			<div className="film-row">
	  			<FilmPoster film={this.props.film} />
 				<div className="film-summary">
   					<h1>TITLE</h1>
    				<p>YEAR</p>
  				</div>
			</div>
		);
	}
}