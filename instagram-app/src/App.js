import React from "react";

import styled from 'styled-components'

import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login"; 

import withAuthenticate from './components/Authentication/withAuthenticate'; 

const AppStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`; 


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login); 

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <AppStyles>
        <ComponentFromWithAuthenticate />
      </AppStyles>
    );
  }
}

export default App;

