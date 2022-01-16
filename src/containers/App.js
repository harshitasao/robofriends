import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundaries from '../components/ErrorBoundaries';


class App extends Component  {
	constructor(){
		super();
		this.state = {
			robot:[],
			searchfield:''

		}
	}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>{
	 return	response.json();
	})
	.then(users => {
       return this.setState({robot:users});

	})
}

onSearchChange = (event) =>{
	this.setState({searchfield:event.target.value})
	
}

	render(){
		const{robot, searchfield} = this.state;
		const filteredRobot = robot.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return !robot.length ?
		 <h1>Loading</h1>:
		(
			<div className='tc'>
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange = {this.onSearchChange}/>
			<Scroll>
			<ErrorBoundaries>
			<CardList robot = {filteredRobot}/>
			</ErrorBoundaries>
			</Scroll>
			</div>
			);
		

	}
}
export default App;