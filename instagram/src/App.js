import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState ({
      data: dummyData
    });
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
      <div className="container">
        {this.state.data.map(data => {
          return (
            <PostContainer
              key={data.username} 
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
            />
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
