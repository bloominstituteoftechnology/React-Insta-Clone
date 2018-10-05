import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
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
    this.setState({ data: dummyData });
  }

  render() {

    return (
      <div className="App">
        <SearchBar />
        <div className="posts">
          {this.state.data.map(user => {
            return (
              <div>
              <PostContainer
                username={user.username}
                icon={user.thumbnailUrl}
                image={user.imageUrl}
                likes={user.likes}
                timeStamp={user.timestamp}
                comments={user.comments}
                  />
                </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
