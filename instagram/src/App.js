import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authentication';

import './App.css';
import Login from './components/Login/Login';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: [],
      input: ''
    };
    this.addNewComment = this.addNewComment.bind(this);
  }

  addNewComment(e, index){
    const obj = {
                  text: e.target.value,
                  username: 'sibaht'
                }

    const dataItem = Object.assign({}, this.state.data[index]);
    dataItem.comments.push(obj);
    this.setState({
      dataItem
    })
    e.target.value ="";
  }
  addNewLike = (index) =>{
    let dataItem =  this.state.data.slice();
    let like = dataItem[index].likes + 1;
    dataItem[index].likes = like;
    this.setState({
      data: dataItem
    })
  }
  componentDidMount () {
    this.setState({
      data: dummyData
    })
  }
  

  render() {
    return (
      <div className="app">
        <PostsPage state={this.state} addNewComment={this.addNewComment} addNewLike={this.addNewLike}/>
      </div>
    );
  }
}

export default Authenticate(App);
