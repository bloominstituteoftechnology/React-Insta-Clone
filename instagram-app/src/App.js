import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PostContainer from "./Components/PostContainer/PostContainer";
import SearchBarContainer from './Components/SearchBar/SearchBarContainer'



function App() {
  

  return (
    <div className="App">
        <SearchBarContainer/>
      {dummyData.map(e => (
        <PostContainer Data={e} key={e.timestamp} />
      ))}
    </div>
  );

}

export default App;
