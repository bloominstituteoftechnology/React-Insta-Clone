import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <SearchBar/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;
