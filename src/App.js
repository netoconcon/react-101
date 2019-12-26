import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'SuperMax'
  }

  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.inputChangedHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName= {this.state.username} />
        <UserOutput userName="Neto" />
      </div>
    );
  }
}

export default App;
