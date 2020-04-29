import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { PostContainer } from './components/PostContainer/PostContainer';
import { Comment } from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';
/*import containercss from './components/PostContainer/post.css';*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

componentDidMount () {
const { data } = dummyData;
  this.setState({ dummyData: data });
}  

render() {
  return (
    <div>
      {dummyData.map(dummyData => {
        return (
          <div id="post">
          <div id="profilepicture">
          <img className="imgUrl" src={dummyData.thumbnailUrl}
          width="600" alt="profilepicture"/>
          </div>
          <p>{dummyData.username}</p>
          <img className="imgUrl" src={dummyData.imageUrl}
          width="600" alt="post"/>
          <p>{dummyData.likes}</p>
          <div>{dummyData.comments.username}
          {dummyData.comments.text}</div>
          </div>
        );
      })}
      </div>
  );
}
}

export default App;
