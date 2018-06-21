import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authentication';

import './App.css';

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
                  username: window.localStorage.getItem('username')
                }

    const dataItem =  this.state.data.slice();
    dataItem[index].comments.push(obj);
    window.localStorage.removeItem('data');

    window.localStorage.setItem('data', JSON.stringify(dataItem))
    this.setState({
      data: JSON.parse(window.localStorage.getItem('data'))
    })
    e.target.value ="";
  }
  deleteComment = (index1, index2) =>{
    console.log(index1, index2)
    const dataItem =  JSON.parse(window.localStorage.getItem('data'));
    dataItem[index1].comments.splice(index2, 1);
    
    window.localStorage.removeItem('data');
    window.localStorage.setItem('data', JSON.stringify(dataItem))
    this.setState({
      data: JSON.parse(window.localStorage.getItem('data'))
    })
    console.log('finish deleting');
  }
  addNewLike = (index) =>{
    let dataItem =  this.state.data.slice();
    let like = dataItem[index].likes + 1;
    dataItem[index].likes = like;
    this.setState({
      data: dataItem
    })
  }
  componentWillUnmount(){
    window.localStorage.removeItem('data');
  }
  componentDidMount () {
    if(window.localStorage.getItem('data')){
      this.setState({
        data: JSON.parse(window.localStorage.getItem('data'))
      });
    }else{
      this.setState({
        data: dummyData
      }, ()=>{
        window.localStorage.setItem('data', JSON.stringify(this.state.data))
      })
    }
  }
  

  render() {
    // window.localStorage.removeItem('data');
    console.table(this.state.data);
    return (
      <div className="app">
        <PostsPage state={this.state} addNewComment={this.addNewComment} addNewLike={this.addNewLike} deleteComment={this.deleteComment}/>
      </div>
    );
  }
}

export default Authenticate(App);
