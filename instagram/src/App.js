import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="App">
        Hello.
        { this.state.data.map(post => {
          return <PostContainer data={post} />
        }) }
      </div>
    );
  }
    // return <h1>Test</h1>;
}

export default App;
