import React, { useState } from 'react';
import data from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

function App() {
  const [post, setData] = useState(data);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searching');
    const data = post;
    const query = [];
    setSearch(e.target.value.toLowerCase())
    data.map(user => {
      if (user.username.toLowerCase().includes(search)) {
        query.push(user);
      }
      return setData(query)
    });
    
  }

  return (
    <div className="App">
      <SearchBar
        search={search}
        handleSearch={handleSearch}
      />
      {post.map((userPost, index)=>{
        return (
        <PostContainer
        key={index}
        props={userPost}
        />)
      })
      }
      
    </div>
  );
}

export default App;
