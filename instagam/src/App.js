import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentsData: [],
      newPost: '',

    }
  }
  componentDidMount() {
    this.setState ({ commentsData: dummyData });
  }
  
  handleChange = (e) => {
    console.log('e target value: ', e.target.value);
    this.setState({ newPost: e.target.value });
}


addComment =(url) => {
  // e.preventDefault();
  // console.log('e: ', e)
  console.log('url: ', url)
  // map over state - commentsData
  // if object.imgURL === url { push newObj into data.comments}
  // setState
  const newCommentsCopy=this.state.commentsData.slice();
  let slicedComment = newCommentsCopy.comments;
  console.log('slicedComment: ', typeof(slicedComment))

  const newComment = this.state.newPost;
  let arr; 
  let newObj={
      username: 'grej',
      text: newComment
  }
  // if(newCommentsCopy.imageUrl===url) {
  //   slicedComment.push(newObj);
  //   this.setState({ commentsData: newCommentsCopy, newPost: '' })
  // } null;
 
  newCommentsCopy.map(item => {
    if(url === item.imageUrl){
     arr = item.comments;
    arr.push(newObj);
    console.log('arr: ', arr)

      return arr;
      
  }  null;
})  
let newData= newCommentsCopy;
this.setState({ commentsData: newData, newPost: '' })

}
  
 

  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <div > 
          <PostContainer 
            passedState = {this.state.commentsData} 
            changeProps={this.handleChange}  
            clickProp = {(e) => this.addComment}
            name = {this.state.newPost}
          />
        </div>
      </div>
    );
  }
}

export default App;
