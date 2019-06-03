import React from "react";
import uuid from 'uuid';
import "./App.css";

import dummyData from "./dummy-data";
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(data => {
        console.log(data);
        return <PostContainer key={uuid()} data={data} />;
      })}
    </div>
  );
}

export default App;
