import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './Components/SearchBar/SeachContainer';
import PostsContainer from './Components/PostsContainer/PostsContainer';
import Post from './Components/PostsContainer/Post';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: dummyData
    }
  }


  render() {
    console.log(this.state)
  return (
    <div className="App">
      <h1>Ello Moto!</h1>
      <SearchContainer />
      <PostsContainer user={this.state.user} /> 
      
    </div>
  );
}
}
export default App;
