import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'


function App (props){  
 return (
   <div className="App">
    <ThemeProvider theme={theme}>
      <PostPage/>
    </ThemeProvider>        
   </div>
            
    )    
}

export default Authenticate(App);
