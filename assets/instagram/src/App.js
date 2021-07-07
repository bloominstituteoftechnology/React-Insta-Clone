import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faInstagram)


// import CommentSection from './components/CommentSection/CommentSection';



class App extends Component {
  constructor(){
  super();
      this.state = {
      dummyData: dummyData,
        newComment: ''
    }

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dummyData: dummyData,
        newComment: ''
      });
    }, 2000);
  }

  changeHandler = event => {
    event.preventDefault();
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  // searchPostsHandler = e => {
  //   const posts = this.state.dummyData.filter(p => {
  //     if (p.username.includes(e.target.value)) {
  //       return p;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };

  // targetHandler = id => {
  //   console.log(id);
  // }




  render() {
    

    console.log(this.state.dummyData);
    // console.log(this.state.dummyData[0].comments[0].text);
    
    return (
      <div className="App">
      <h1>Am I Rendered?</h1>
      <SearchBar
      usernameInfo = {this.state.dummyData}
      />
      <PostContainer
      postInfo = {this.state.dummyData}
      addNewComment = {this.addNewComment}
      newComment = {this.state.newComment}
      changeHandler = {this.changeHandler}
      />
      {/* <CommentSection 
      commentInfo = {dummyData}
      /> */}
      </div>
    );
  }
}

export default App;
