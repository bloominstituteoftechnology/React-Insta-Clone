import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'
import SearchBar from './components/SearchBar/SearchBar'
import Authenticate from './Authenticate';

const App = Authenticate (
class App extends Component {
  constructor(){
    super()
    this.state = {
      instaPosts: [],
      searchPosts:[],
      input:""

    }
  }
  componentDidMount() {
    this.setState ({instaPosts: dummyData})
  }

  search = () => {
    const searchPosts = this.state.searchPosts.slice();
    for (let i=0; i<this.state.instaPosts.length; i++) {
      if (this.state.instaPosts[i].username.includes(this.state.input)) {
        searchPosts.push(this.state.instaPosts[i])
      }
    }
    this.setState({searchPosts: searchPosts});
  }

  savesearch = (event) => {
    this.setState({input:event.target.value});
      const searchPosts = [];
      for (let i=0; i<this.state.instaPosts.length; i++) {
        if (this.state.instaPosts[i].username.includes(this.state.input)) {
          searchPosts.push(this.state.instaPosts[i])
        }
      }this.setState({searchPosts: searchPosts});
      
    }
  

  render() {
    return (
      <div className="desktop">
        <SearchBar search={this.savesearch}/>
        <div className="App">
          <PostsPage instaPost ={this.state.input === "" ?  this.state.instaPosts: this.state.searchPosts}/>
        </div>
      </div>
    );
  }
})

export default App;
