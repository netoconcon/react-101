import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'SuperMax'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangeHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName= {this.state.username} />
        <UserOutput userName="Neto" />
      </div>
    );
  }
}

export default App;
