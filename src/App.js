import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
	constructor() {
		super();	
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
      		.then(response => {
      			return response.json();
      		})
      		.then(user => {
				this.setState({robots:user});
      		});
	}

	onSearchChange = (event) => {
		this.setState({
			searchfield: event.target.value
		})
	}	

	render() {
		if(this.state.robots.length === 0) {
			return (
				<div className="tc">
				  <h1 className="f2">Loading</h1>
				</div>
			)
		} else {
			const filteredRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			});
			return (
			  <div className="tc">
				  <h1 className="f2">Robofriends</h1>
				  <SearchBox className="shadow-5" searchChange={ this.onSearchChange }/>
			      <CardList robots={ filteredRobots }/>
			  </div>
			)
		}
	}
}

export default App;