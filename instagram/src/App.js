import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import postContainer from './components/PostContainer/postContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    return (
      <div callsName="Page">
        <h1 className="Header">Instagram</h1>
        {this.state.posts.map((post, i) => {
          return <postContainer post={post} key={i} />
        })}
      </div>
    );
  }
}

export default App;
