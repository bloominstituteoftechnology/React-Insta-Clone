import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";

const App = () => {
  const [posts] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar />
      <PostsPage postData={posts} />
    </div>
  );
};

export default App;
