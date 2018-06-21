import React, { Component } from 'react';
import PostsPage from './components/PostsPage';
import Authenticate from './Authentication/Authenticate';
import styled from "styled-components";

function App() {
  return (
    <PostsPage />
  )
}


export default Authenticate(App);