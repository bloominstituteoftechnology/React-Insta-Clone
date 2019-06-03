import React from "react";
import "./App.css";

import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <div className="App">
      {dummyData.map(data => {
        console.log(data);
        return <PostContainer key={data.id} data={data} />;
      })}
    </div>
  );
}

export default App;
