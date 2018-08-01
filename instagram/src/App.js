import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import fuzzy from 'fuzzy';
import SearchBar from './components/SearchBar/SearchBar.js';
import Authenticate from './components/Authentication/Authenticate.js';
import Login from './components/Login/login.js';

const App=Authenticate(
  class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[],
      filteredPosts:[],
      searchBarValue:'',
      username:''
    }
  }
  componentDidMount(){
    this.setState({posts:dummyData});
  }
  
  handleSearchBarChange=(event)=>{
    this.setState({searchBarValue:event.target.value},()=>this.filterPosts());
  }
  login=()=>{
    localStorage.setItem('username',this.state.username);
  }
  handleLogInChange=(e)=>{
    this.setState({username:e.target.value},console.log(this.state.username));
  }
  filterPosts=()=>{
    let filteredPosts=this.state.posts.slice();
    let itemsToBeFiltered=filteredPosts.map(e=>e.username);
    itemsToBeFiltered=fuzzy.filter(this.state.searchBarValue,itemsToBeFiltered).map(e=>e.string);
    filteredPosts=filteredPosts.filter((e)=>itemsToBeFiltered.indexOf(e.username)!==-1);
    this.setState({filteredPosts:filteredPosts});
  }
  liked=(data)=>{
    const postsCopy=this.state.posts.slice();
    postsCopy.forEach(e=>{
      if(e===data){
        if (e.liked===undefined||e.liked===false){
          e.likes+=1; e.liked=true;
        } else {
        e.likes-=1; e.liked=false;
      }}});
    return this.setState({posts:postsCopy});
  }
  render() {
    return (
      <div className="App">
        <SearchBar searchValue={this.searchBarValue} handleInputChange={this.handleSearchBarChange}/>
        <PostsPage searchBarValue={this.state.searchBarValue} posts={this.state.posts} filteredPosts={this.state.filteredPosts} 
        liked={this.liked} handleInputChange={this.handleSearchBarChange}/>
        <Login newUser={this.state.username} logIn={this.login} logInChange={this.handleLogInChange}/>
      </div>
    );
  }
});
export default App;
