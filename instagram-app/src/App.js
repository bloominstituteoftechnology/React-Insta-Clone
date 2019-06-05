import React, { useState, useEffect } from "react";
import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

function App() {
  const initialState = () => JSON.parse(window.localStorage.getItem("posts") || null);
  const [post, setData] = useState(initialState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(data));
    // const allData = localStorage.getItem("posts");
    // const postData = JSON.parse(allData);
    // console.log(postData);
    setData(post);
  }, [post]);
  const handleSearch = e => {
    e.preventDefault();
    console.log("searching");
    const data = post;
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
      {post.map((userPost, index) => {
        return <PostContainer key={index} props={userPost} />;
      })}
    </div>
  );
}

export default App;
