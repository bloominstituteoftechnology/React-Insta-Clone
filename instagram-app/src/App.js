import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";
import data from "./dummy-data";
// import SearchBar from "./components/SearchBar/SearchBar";
// import PostContainer from "./components/PostContainer/PostContainer";
import PostPage from './components/PostContainer/PostPage';
import "./App.css";

const preprocessData = data.map(post=> {
  return {
      ...post, postId: uuidv4()
    }
  })

function App() {
  const [posts, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const allData = localStorage.getItem("posts");
    let postData
    if(allData) {
      postData = JSON.parse(allData);
    }else {
      localStorage.setItem("posts", JSON.stringify(preprocessData));
      postData = JSON.parse(localStorage.getItem("posts"));
    }
    setData(postData);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
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
      {/* <SearchBar search={search} handleSearch={handleSearch} />
      {posts.map((userPost, index) => {
        return <PostContainer 
        key={index} 
        props={userPost} 

        />;
      })} */}
      <PostPage 
        handleSearch={handleSearch}
        search={search}
        posts={posts}
      />
    </div>
  );
}

export default App;
