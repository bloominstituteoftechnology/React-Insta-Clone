import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  state = dummyData;

  // createTimestamp = () => {
  //   const modifiedData = this.state.map((post) => {
  //     post['time'] = post.timestamp.substring(post.timestamp.search(', '), post.timestamp.lastIndexOf(':')), post.timestamp.substr(str.length - 3);
  //     return post;
  //   });
  //   this.setState( {modifiedData} );
  // }

  render() {
    return (
      <div className="App">
        {/*{this.createTimestamp()}*/}
        <SearchBar />
        {
          this.state.map(post => {
            return <PostContainer
              post={post} 
            />;
          })
        }
      </div>
    );
  }
}

export default App;
