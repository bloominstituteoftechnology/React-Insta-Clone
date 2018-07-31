import React, { Component } from 'react';
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
      query: '',
    };
  }

  onSearch = e => {
    e.preventDefault();
  };

  handleSearchChange = e => {
    let dataTemp = (e.target.value !== '' ?
      this.state.data.filter(data => 
        data.username.includes(this.state.query))
      : null);
    this.setState({
      dataTemp: dataTemp,
      isEmpty: !(e.target.value !== ''),
      query: e.target.value,
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
