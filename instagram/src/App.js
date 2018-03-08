import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="App">
        <h1> Instagram </h1>
        {this.state.data.map(post => {
          return <PostContainer key={post.username} data={post} />
        })}
      </div>
    );
  }
}

export default App;
