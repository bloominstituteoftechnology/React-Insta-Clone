import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from "./components/SearchBar/searchBar";
// import PostContainer from './components/PostContainer/PostContainer'
import PostsPage from './components/PostContainer/PostContainer.js'

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
      posts: dummyData,
      searchReturn: dummyData
    })
  }
 changeHandler=(e)=>{
// e.preventDefault();
  this.setState({searchInput: e.target.value},this.searchPostforUser()
  );}

  searchPostforUser=()=>{
   this.setState({searchReturn: this.state.posts.filter(item =>{return item.username.toLowerCase().includes(this.state.searchInput.toLocaleLowerCase())}), searchInput: ''})
  }

  render() {
    return (
      <div className="App">
        <SearchBar change={this.changeHandler} value={this.state.searchInput}/>
        <PostsPage 
        searchInput={this.state.searchInput} 
        searchReturn={this.state.searchReturn} 
          
        />
        </div>
      );
  }
}

export default App;
