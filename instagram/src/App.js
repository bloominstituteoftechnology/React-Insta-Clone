import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Authentication/Login'
import PostsPage from './components/PostContainer/PostsPage';




class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],

      username:'', 
      
      password:''

     };
  }

handleUsername = e => {
 this.setState({username: e.target.value});
}

handlePassword = e => {
  this.setState({password: e.target.value});
}

addNewLogin = e => {
  e.preventDefault();
  localStorage.setItem(this.state.username, this.state.password);
}

componentDidMount() {
  console.log('mounty component', this.state)
  this.setState({posts: dummyData});
   localStorage.getItem("mboegner", "password") ? <PostsPage posts={this.state.posts}/> : <Login />

}

  render() {
    console.log('page rendered', this.state)
    return (
      <div className="container">
       <Login 
       addNewLogin={this.addNewLogin}
       handleUsername={this.handleUsername}
       handlePassword={this.handlePassword}
       />
      </div>
    );
  }
}

const Auth = Authenticate(App);
export default App;
