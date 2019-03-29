import React, { Component } from 'react';
import './App.scss';
import withAuthenticate from './authentication/withAuthenticate'
import PostPage from './components/PostContainer/PostPage'
import Login from "./components/Login/Login";
import styled, {css} from 'styled-components'


const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostPage)

const AppDiv = styled.div`
    background-color:white;
     > * {
    width: 100%;
  }
`

class App extends Component {
  constructor(){
     super()
     this.state = {
     }
  }
  
  
 
  render() {
        return (
          <AppDiv >
              <ComponentFromWithAuthenticate/>
          </AppDiv>
        )
    }
}
export default App;
