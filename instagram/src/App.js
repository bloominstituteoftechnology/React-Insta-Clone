import React, { Component } from 'react'
// import logo from './logo.svg'
import dummyData from './dummy-data'
import PostContainer from './components/Post/PostContainer'
import SearchBar from './components/Search/SearchBar'
import './App.css';


 class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((element) => {
          return(
            <PostContainer key={element.timestamp} post={element}/>
          )
        })}
      </div>
    )
  }
}
 export default App