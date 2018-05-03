import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {dummyData} from './dummyData';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dummyData: []
      };
    };

    componentDidMount() {
      this.setState({ dummyData: dummyData });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Instagram Clone!</p>
        <div className="Posts">
        {this.state.dummyData.map((post, index) => {
          return (
            <PostContainer key={index} post={post}/>        
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
