import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser, faCompass, faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import dummyData from './dummy-data';
import './App.css';

library.add(faUser, faCompass, faHeart, faInstagram, faSearch, faComment);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: dummyData
    }
    console.log(this.state.data);
  }

  render() {
    // Setup a default key
    let i = 0;

    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map( (data) => {
          // Pass each element to PostContainer:
            // username: "philzcoffee",
            // thumbnailUrl:
            // imageUrl:
            // likes: 400,
            // timestamp: "July 17th 2017, 12:42:40 pm",
            // comments: 
          
          return (
            <PostContainer
              key={i++} 
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
