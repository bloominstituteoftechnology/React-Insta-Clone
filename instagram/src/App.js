import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comment: '',
      search: '',
    }
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  updateComment = event => {  
    this.setState({comment: event.target.value});
  }

  updateSearch = event => {
    this.setState({search: event.target.value})
  }
  
  addNewComment = (event, index) => {
    event.preventDefault();
    let newData = this.state.data.slice();
    let newComment = {
      username: localStorage.getItem("username"),
      text: this.state.comment,
    }
    newData[index].comments.push(newComment);
    this.setState({data: newData, comment: ''});
  }

  searchHandler = event => {
    event.preventDefault();
    if(this.state.search === ''){
      this.setState({data: dummyData})
    }
    else{
      let regEx = new RegExp(this.state.search, 'i');
      let newPosts = this.state.data.filter(post => 
        regEx.test(post.username)
      );
      this.setState({data: newPosts, search: ''});
      
    }

  }

  logout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <div className="App">
        <div className="posts">
          <PostsPage data={this.state.data}
                      addNewComment={this.addNewComment}
                      updateComment={this.updateComment}
                      updateSearch={this.updateSearch}
                      searchHandler={this.searchHandler}
                      search={this.search} />
        </div>
        <form onSubmit={this.logout}><button type="submit">Logout</button></form>
      </div>
    );
  }
}

const ValidatedApp = Authenticate(App);


export default ValidatedApp;
