import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({users: dummyData});
  }


  render() {
    console.log("state users: ", this.state.users);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostContainer psusers={this.state.users} />
      </div>
    );
  }
}

export default App;
