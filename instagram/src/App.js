import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authentication from './components/Authentication/Authentication';
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
  max-width: 600px;
  margin:0 auto;
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = { }
  }
  render(){
    return (
      <WrapperDiv>
        <PostsPage logout={this.props.logout} />
      </WrapperDiv>
    )
  }
}

export default Authentication(App);
