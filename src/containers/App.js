
import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

// //online fake user list from - jsonplaceholder.typicode.com/users
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({ robots: users }))
//   }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {

    const { robots, searchfield } = this.state;

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    //ternary operator (if - else statement) 
    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <h6>by: Developer Shan</h6>
          <SearchBox searchChange={this.onSearchChange} />
          <br/>
          <Scroll>
            {/* <ErrorBoundry> */}
              <CardList robots={filterRobots} />
            {/* </ErrorBoundry> */}
          </Scroll>
        </div>
      ); 
  }
  
}

export default App;
