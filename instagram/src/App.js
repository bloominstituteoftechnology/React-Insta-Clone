import React, { Component } from 'react';
import Fuse from 'fuse.js';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataTemp: null,
      isEmpty: true,
    };
  }

  onSearch = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({data: this.state.data, dataTemp: null, isEmpty: true});
  };

  handleSearchChange = e => {
    if (e.target.value !== '') {
      var dataTemp;
      let options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 20,
        maxPatternLength: 30,
        minMatchCharLength: 1,
        keys: ["username"]
      };
      dataTemp = new Fuse(this.state.data, options).search(e.target.value);
    } else {
      dataTemp = null;
    }

    this.setState({
      dataTemp: dataTemp, 
      isEmpty: !(e.target.value !== ''),
    });
  };

  /* Lifecycle Methods */

  componentDidMount() {
    this.setState({
      data: dummyData,
    });
  }

  render() {
    let data = (this.state.dataTemp ? this.state.dataTemp : this.state.data)
    return (
      <div className="App">
        <SearchBar 
          onSearch={this.onSearch} 
          onChange={this.handleSearchChange} 
          isEmpty={this.state.isEmpty} />
        <div className="posts">
          {
              data.map((data, ind) =>
                <PostContainer
                  key={data.timestamp + ind}
                  id={data.timestamp + ind}
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
