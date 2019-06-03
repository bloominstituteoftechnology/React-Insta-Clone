import React from "react";
import Posts from "./components/PostContainer/postContainer.js";
import Nav from "./components/SearchBar/searchBar.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Posts />
    </div>
  );
}

export default App;
