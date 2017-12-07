/*import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

const App = () => (
  <div className="App">
    <SearchBar />
    {dummyData.map((post, i) => <PostContainer key={i} postData={post} />)}
  </div>
);

export default App;  */

import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import PostContainer from './PostContainer/PostContainer';
import SearchBar from './SearchBar/SearchBar';
import dummyData from './dummy-data';

// file with import dummyData from './dummy-data';
// and iterate over said data,
// passing each individual object as a prop to an instance of PostContainer.


const App = () => {
  return(
    <div className= "App">
  <SearchBar/>
  {dummyData.map((post, i) => <PostContainer key= {i} postData={post} />)}
  </div>
  );
}
  
export default App;  
 


