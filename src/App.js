import React, { Component } from 'react';
import './App.css';

//components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      comment: '',
      //comments: this.state.posts.comments
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })  
  }

  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
      <SearchBar />

      {this.state.posts.map((user, i) => {
        return <PostContainer comment={this.state.comment} user={user} key={i}/>
      })}

      </div>
    );
  }
}


//itterate over dummy data pass each object as a prop to instance of PostContainer
//post container will pass array of comments on each post as a prop to comment sections
//comment section will render a comment component with username, there should also be a input box that allows submmission of new comments
//use proptypes to check the type of data



export default App;
