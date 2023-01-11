import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css'

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(user => {
			setRobots(user);
		});
	}, []) 
	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	}	
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});
	return !robots.length ? 
			(
				<div className="tc">
				  <h1 className="f2">Loading</h1>
				</div> 
			) : 
			(
			  <div className="tc">
				  <h1 className="f2">Robofriends</h1>
				  <SearchBox className="shadow-5" searchChange={ onSearchChange }/>
			      <Scroll>
				      <CardList robots={ filteredRobots }/>
			      </Scroll>
			  </div>
			)
}

export default App;
