import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage.js'
import Authenticate from './components/Authentication/Authenticate.js'
import {WrapperDiv} from './components/Styles'
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = ({
      username: this.props.username,
    })
  }
  

  render() {
    return(
      <WrapperDiv>
        <PostsPage username={this.state.username} />
      </WrapperDiv>
    )
  }
}

export default Authenticate(App);