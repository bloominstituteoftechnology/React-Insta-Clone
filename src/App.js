import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor (){
    super();
    this.state={
      posts: dummyData,
			inputComment:""
    };
  }

  handleInput = event =>{
    this.setState({inputComment:event.target.value
    })
  } 
  addNewComment = (event, index) =>{
    console.log("TEST TEST TEST");
  }
  componentDidMount(){
    this.setState({posts:dummyData});
  }


  render() {
    return (

      <div className="App">
				<SearchBar/>{
        this.state.posts.map( postObject => {
          return <PostContainer key={postObject.username} postObject={postObject} />
        })
      }</div>
    );
  }
}
export default App;

