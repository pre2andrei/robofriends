import React, { Component } from 'react';
import CardList from './CardsList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            filter: ''
        };
    };

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.state.filter.toLowerCase());

        });

        if(this.state.robots.length===0)
        return (<h1>Loading</h1>);

        return ( < div className = 'tc' >
        <h1 className='f1'> Robo Friends </h1> 
        <SearchBox onSearchChange = { this.onSearchChange }/> 
        <Scroll>
        < CardList robots = { filteredRobots }/> 
        </Scroll>
        </div>);;
        }
    }

    export default App;