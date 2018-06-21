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
      search: ''
    }
  }

  addNewComment = (event) => {
    event.preventDefault();
    let newComment = {text: this.state.comment, username: 'user'}; 
    let newData = this.state.data.slice(); 
    let commentArr= newData.map(item => {
      return item[0].comments;
    })
    commentArr.push(newComment);
    this.setState({data: newData}); 
  }

  likePost = (i) => {
    let newData = this.state.data.slice();
    newData[i].likes += 1;
    this.setState({data: newData});
  }

  handleComment = event => {
    this.setState({comment: event.target.value});
    event.preventDefault();
  }

  handleChange = event => {
    event.preventDefault();
      this.setState({search: event.target.value.substr(0,20)})
  }

  searchFunc = event => {
    console.log('this');
    const updatedList = this.state.data.slice;
    updatedList.filter(item => {
      return item.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
      console.log(updatedList);
    this.setState({search: updatedList});
    event.preventDefault();
  }

  componentDidMount() {
    this.setState({
      data: dummyData,  
    });
  }


  render() {
    return (
      <div className="App">
        <PostsPage data={this.state.data} comment={this.state.comment} handleComment={this.handleComment} addComment={this.addNewComment} likePost={this.likePost} handleChange={this.handleChange} searchFunction={this.searchFunc} search={this.state.search}/>
      </div>
    );
  }
}
const AuthApp = Authenticate(App);

export default AuthApp;
