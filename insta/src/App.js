import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from "./components/SearchBar/searchBar";
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor(){
    super();
    this.state ={
      posts: [],
      searchReturn: [],
      searchInput: ''
    }
  }

 

  componentDidMount = () =>{
    this.setState({
      posts: dummyData
    })
  }
 changeHandler=()=>{
  this.setState({searchInput: e.target.value})
 }

  searchPostforUser=(e)=>{
    e.preventDefault();
   const searchList = this.state.posts.filter(item =>item.username === this.state.searchInput);
   this.setState({searchReturn: searchList, searchInput: ''})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-container">
        {this.state.posts.map(item =>{
          return(
          <PostContainer key={item.timestamp} obj={item} />
       )})}
       </div>
      </div>
    );
  }
}

export default App;
