import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PostContainer from "./Components/PostContainer/PostContainer";

function App() {
  return (
    <div className="App">
      {dummyData.map(e => (
        <PostContainer Data={e} key={e.timestamp} />
      ))}
    </div>
  );
}

export default App;
