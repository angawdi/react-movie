import React, { Component } from 'react';

export default class Fave extends Component {
	constructor(props) {
		super();
		this.state = {
			isFave : false
		}
	}

	handleClick = (e) => {
		e.stopPropagation();
		this.setState({
			isFave: !this.state.isFave
		})
		console.log('Handling fave click');
	}
	render() {
		return (
			<div className="film-row-fave add_to_queue" conClick={this.handleClick}>
  			<p className="material-icons">add_to_queue</p>
</div>
		);
	}
}