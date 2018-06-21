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
      search: ''
    }
  }

  likePost = (i) => {
    let newData = this.state.data.slice();
    newData[i].likes += 1;
    this.setState({data: newData});
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

  logOut = () => {
    window.localStorage.removeItem('username');
    window.location.reload();
  }

  componentDidMount() {
    this.setState({
      data: dummyData,  
    });
  }


  render() {
    return (
      <div className="App">
        <PostsPage data={this.state.data} handleComment={this.handleComment} addComment={this.addComment} comment={this.state.comment} likePost={this.likePost} handleChange={this.handleChange} searchFunction={this.searchFunc} search={this.state.search} logOut={this.logOut}/>
      </div>
    );
  }
}
const AuthApp = Authenticate(App);

export default AuthApp;
