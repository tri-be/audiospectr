import React, { Component } from 'react'
import './App.css';

class Search extends Component {
	state = {
		track: ''
	}

	handleChange = (event) => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log("WOOOOOOOOOHOOOOOOOOO\n", this.state.track)
		this.props.getTrackAnalysis(this.state.track)
	}

	render() {
		return(
			<div>
				<p>Search a song to see its visualization</p>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Track Name" name="track" value={this.state.value} onChange={this.handleChange}/>
					<button type="submit">Sumbit</button>
				</form>
			</div>
		)
	}
}

export default Search