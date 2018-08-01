import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Authentication/Login'
import PostsPage from './components/PostContainer/PostsPage';

const Auth = Authenticate(App);


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[]
     };
  }

addNewLogin(e) {
  localStorage.setItem(e.target.value);

}

componentDidMount() {
  this.setState({posts: dummyData});
  return(localStorage.getItem("mboegner", "NewEnglandClamChowder") ? <PostsPage /> : <Login />)
}
  render() {
    return (
      <div className="container">
       <Login addNewLogin={this.addNewLogin}/>
      </div>
    );
  }
}

export default App;
