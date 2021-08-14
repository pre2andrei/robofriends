import React, { Component } from 'react';
import CardList from './CardsList';
import friends from './friends';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: friends,
            filter: ''
        };
    };

    onSearchChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {

            const fullName = `${robot.firstName} ${robot.lastName}`.toLowerCase();
            return fullName.includes(this.state.filter.toLowerCase());

        });

        return ( < div className = 'tc' >
        <h1 className='f1'> Robo Friends </h1> 
        <SearchBox onSearchChange = { this.onSearchChange }/> 
        < CardList robots = { filteredRobots }/> 
        </div>);;
        }
    }

    export default App;