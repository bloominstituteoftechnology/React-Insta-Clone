import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [] 
    }

  }

  randomIdGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  componentDidMount(){
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
        <SearchBar />
        {this.state.data.map((user, index) => <PostContainer usrData={user} idx={index} key={index} />)}
        </div>
      </div>
    );
  }
}

export default App;
