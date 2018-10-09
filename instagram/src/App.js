import React, { Component } from 'react';
import data from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((d, i) => {
          return <PostContainer data={d} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
