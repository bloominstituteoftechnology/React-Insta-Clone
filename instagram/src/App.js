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
      username: "GottaPayTheTrollToll291",
      text: this.state.comment,
    }
    newData[index].comments.push(newComment);

    this.setState({data: newData});
  }

  render() {
    return (
      <div className="App">
        <div className="posts">
          <PostsPage data={this.state.data} />
        </div>
      </div>
    );
  }
}

const ValidatedApp = Authenticate(App);


export default ValidatedApp;
