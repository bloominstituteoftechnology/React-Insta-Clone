import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';




class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      search: '',
    };
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }



  componentDidMount = () => {
     this.setState({ postData: dummyData })
  }

  render() {
    return (

      <div className="App">
        <PostsPage
        handleChange={this.handleChange}
        searchPosts={this.searchPosts}
        postData={this.state.postData}
        />
      </div>
    )}

}




export default Authenticate(App);
