import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

import './App.css';

console.log(dummyData);



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dummyData
    }
  }


    render() {

    const posts = this.state.data.map(obj => <PostContainer key={Math.random()}
                                                      user={obj.username}
                                                      thumbnail={obj.thumbnailUrl}
                                                      image={obj.imageUrl}
                                                      time={obj.timestamp}
                                                      likes={obj.likes}
                                                      comments={obj.comments}/>)


    return (
      <div className="App">
        <SearchBar data={this.state.data} />
        {posts}
      </div>
    );
  }
}

export default App;
