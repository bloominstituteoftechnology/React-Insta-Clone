import React, { Component } from 'react';
import dummyData from "./dummy-data";
import Header from './components/header/Header'
import PostContainer from './components/PostContainer/PostContainer'
import Authenticate from './components/Authentication/Authentication'

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      newPost: [],
    }
  }
  componentDidMount() {
    this.setState({
      post: dummyData,
      newPost: dummyData
    })
  }

  searchHandler = event => {
    const search = this.state.post.filter(item => {
      if(item.username.includes(event.target.value)){
        return item;
      }
    });
    this.setState ({newPost: search});
  };


  render() {
    return (
  
      <div className="App">
        <Header 
        searchHandler ={this.searchHandler}
        
        />
        <PostContainer post={this.state.newPost} user={this.props.user}/>

    </div>



    );
  }
}

export default Authenticate(App);