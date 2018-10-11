import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authentication from './components/Authentication/Authentication';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { }
  }
  render(){
    return (
      <div className='app'>
        <PostsPage logout={this.props.logout} />
      </div>
    )
  }
}

export default Authentication(App);
