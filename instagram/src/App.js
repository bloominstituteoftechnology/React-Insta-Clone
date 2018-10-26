import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainter';
import dummyData from './components/dummy-data.js';
import CommentSection from './components/CommentSection/CommentSection';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        posts: "",
    }
  }

componentDidMount(){
  this.setState({
    posts: dummyData,
  })
}




  render() {
    if (!this.state.posts){
      return <div>Loading...</div>
    }
    return (
      <div>
        <SearchBar />
        
       
        {this.state.posts.map((post, index) =>  {
        return ( 
            <div>
            <PostContainer index={index} post={post} />
            {/*<CommentSection comment={this.state.comment} />*/}
            </div>

          
            )
          })}

      </div>
    )}
 }




export default App
