import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchLogo from './Components/SearchBar/SearchLogo';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostsContainer/PostContainer';
import CommentSection from './Components/CommentSection/CommentSection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: dummyData
    }
  }


  render() {
  return (
    <div className="App">
    <PostContainer  user={this.state.user}/> 
    {/* <CommentSection user={this.state.user.comment}/> */}
      <h1>Ello Moto!</h1>
      <SearchLogo />
      <SearchBar />
      
    </div>
  );
}
}
export default App;
