import React, { useState, useEffect } from "react";
import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

function App() {
  const [posts, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const allData = localStorage.getItem("posts");
    console.log('---------',JSON.parse(allData));
    let postData
    if(allData) {
      postData = JSON.parse(allData);
    }else {
      localStorage.setItem("posts", JSON.stringify(data));
      postData = JSON.parse(localStorage.getItem("posts"));
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

  // const addComment = (postId, commentUpdate) => {
  //   const postUpdate = posts.map((userPost) => {
  //     if (postId === userPost.id) {
  //       return {
  //         ...userPost, comments: commentUpdate
  //       }
  //     }
  //     return userPost;
  //   })
  //   localStorage.setItem("posts", JSON.stringify(postUpdate));
  // }

  return (
    <div className="App">
      <SearchBar search={search} handleSearch={handleSearch} />
      {posts.map((userPost, index) => {
        return <PostContainer 
        key={index} 
        props={userPost} 

        />;
      })}
    </div>
  );
}

export default App;
