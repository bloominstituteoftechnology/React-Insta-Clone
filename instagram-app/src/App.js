import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";
import data from "./dummy-data";
import withAuthenticate from "./components/authentication/withAuthenticate";
import PostPage from "./components/PostContainer/PostPage";
import Login from "./components/Login/Login";
import "./App.css";

const preprocessData = data.map(post => {
  return {
    ...post,
    postId: uuidv4(),
    show: "on"
  };
});
const ComponentFromWithAuthenticate = withAuthenticate(PostPage, Login);

function App() {
  const [posts, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const allData = localStorage.getItem("posts");
    let postData;
    if (allData) {
      postData = JSON.parse(allData);
    } else {
      localStorage.setItem("posts", JSON.stringify(preprocessData));
      postData = JSON.parse(localStorage.getItem("posts"));
    }
    setData(postData);
  }, []);
  const handleSearch = e => {
    e.preventDefault();
    const data = posts;
    setSearch(e.target.value.trim());
      const query = data.map(post => {
        if (!post.username.trim().toLowerCase().includes(e.target.value.trim())) {
          return {
            ...post,
            show: "off"
          };
        }
        return {
          ...post,
          show: "on"
        };
      });
      setData(query);
  };

  return (
    <>
    <div className="App">
      <ComponentFromWithAuthenticate
        handleSearch={handleSearch}
        search={search}
        posts={posts}
      />
    </div>
    </>
  );
}

export default App;
