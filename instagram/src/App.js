import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

const App = () => (
  <div>
   {dummyData.map((data, i) => <PostContainer key={i} postData={data} />)}
  </div>
);

export default App;
