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
    }
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  updateComment = event => {  
    this.setState({comment: event.target.value});
  }
  
  addNewComment = (event, index) => {
    event.preventDefault();
    let newData = this.state.data.slice();
    let newComment = {
      username: localStorage.getItem("userName"),
      text: this.state.comment,
    }
    newData[index].comments.push(newComment);
    this.setState({data: newData, comment: ''});
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
                      updateComment={this.updateComment} />
        </div>
        <form onSubmit={this.logout}><button type="submit">Logout</button></form>
      </div>
    );
  }
}

const ValidatedApp = Authenticate(App);


export default ValidatedApp;
