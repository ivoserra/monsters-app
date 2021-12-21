
import React from 'react';
// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box-component'

import './App.css';

// component is part of the react library and life cycle methods
class App extends React.Component{

  constructor(){
    super()

    this.state={
     monsters:[],
     searchField:'',
    };

  }

  // life cycle methods are methods that call at different states when component render, we use componentDidMount
  // promises to lear more go section 34: appendix 1: Key developer Concepts
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  // set state is asyncronous something that takes indefinite amount of time.
  // on change is  a synthetic event 
  render(){
    const { monsters,searchField } = this.state; // destructuring
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
          <div className="App">
          <h1> Monsters Rolodex</h1>
          <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
          <CardList monsters={filteredMonsters}/>
          </div>
        );

  }
}


export default App;
