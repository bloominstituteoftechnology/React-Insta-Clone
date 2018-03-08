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
        <h1> Please for the love of god be happy </h1>
        {this.state.data.map(post => {
          return <div><PostContainer data={post} /></div>
        })}

      </div>
    );
  }
}

export default App;
