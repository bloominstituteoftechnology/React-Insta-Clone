import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';
import dummyData from "./dummy-data.js";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      myData: dummyData
    }
  }
console.log(dummyData)
}
render() {
  return (<div>

    <SearchBar/> {this.state.myData.map((data, index) => (<PostContainer key={index} username={data.username} avatar={data.thumbnailUrl} image={data.imageUrl}/>))}
    {this.state.myData.map((data, index) => (<CommentSection key={index} caption={data.comments}/>))}

  </div>);
}
}

export default PostsPage;
