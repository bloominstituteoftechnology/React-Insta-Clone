import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      isEmpty: true,
      current: '',
    };
  }

  onSearch = e => {
    e.preventDefault();
  };

  handleSearchChange = e => {
    this.setState({isEmpty: !(e.target.value !== '')});
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} onChange={this.handleSearchChange} isEmpty={this.state.isEmpty} />
        <div className="posts">
          {
            this.state.data.map((data, ind) =>
            <PostContainer
              key={data.timestamp + ind}
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
