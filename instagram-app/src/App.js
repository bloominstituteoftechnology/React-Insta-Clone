import React, { useState, useEffect } from "react";
import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

function App() {
  const [posts, setData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const allData = localStorage.getItem("posts");
    let postData
    if(!allData) {
      localStorage.setItem("posts", JSON.stringify(data));
      postData = JSON.parse(localStorage.getItem("posts"));
    }else {
      postData = JSON.parse(allData);
    }
    setData(postData);
  }, []);
  const handleSearch = e => {
    e.preventDefault();
    console.log("searching");
    const data = posts;
    const query = [];
    setSearch(e.target.value.toLowerCase());
    data.map(user => {
      if (user.username.toLowerCase().includes(search)) {
        query.push(user);
      }
      return query;
    });
    setData(query);
  };

  return (
    <div className="App">
      <SearchBar search={search} handleSearch={handleSearch} />
      {posts.map((userPost, index) => {
        return <PostContainer key={index} props={userPost} />;
      })}
    </div>
  );
}

export default App;
