import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[],
      filteredPosts:[],
      searchBarValue:''
    }
  }
  componentDidMount(){
    this.setState({posts:dummyData});
  }
  
  handleSearchBarChange=(event)=>{
    this.setState({searchBarValue:event.target.value},this.filterPosts());
  }
  filterPosts=()=>{
    let filteredPosts=this.state.posts.slice();
    filteredPosts=filteredPosts.filter((e)=>e.username.includes(this.state.searchBarValue));
    this.setState({filteredPosts:filteredPosts},console.log(this.state.filteredPosts));
  }

  render() {
    return (
      <div className="App">
      <SearchBar searchValue={this.state.searchBarValue} handleInputChange={this.handleSearchBarChange}/>
      <div className='posts'>
      {this.state.filteredPosts.length===0 ?
      this.state.posts.map((e)=><PostContainer data={e} key={e.imageUrl}/>):
      this.state.filteredPosts.map((e)=><PostContainer data={e} key={e.imageUrl}/>
    )}
      </div>
      </div>
    );
  }
}

export default App;
