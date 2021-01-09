import React,{Component} from 'react';
import {robots} from '../robofriends';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundary';

const state= {
    robots: [],
    searchfield: ''
}

class App extends Component{

    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())// here we are converting the response to JSON type
        .then(users=>this.setState({robots:users}));
    }

    onSearchChange = (event) =>{// when ever we create our own functions we need to use this function syntax
        this.setState({searchfield: event.target.value})
                    
    }
    render(){

        const {robots,searchfield}=this.state

        const filteredRobots= robots.filter( robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?   
            <h1>Loading</h1>
        :
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>{//we are using this. here as it is an object 
                }
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
            </div>
            
        );

    };  
    
}

export default App;