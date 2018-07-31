import React, { Component } from 'react';
import dummyData from '../../instagram/src/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  onSearch = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='App'>
        <SearchBar onSearch={this.onSearch}/>
        <div className='ig-posts'>
          {
            this.state.data.map(data => 
            <PostContainer
              key={data.timestamp}
              user={data.username}
              thumbnail={data.thumbnailUrl}
              img={data.imageUrl}
              likes={data.likes}
              time={data.timestamp}
              comments={data.comments}
            />)
          }
        </div>
      </div>
    );
  }
}

export default App;
