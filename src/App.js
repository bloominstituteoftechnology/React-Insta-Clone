import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  
  componentDidMount(){
    this.setState({posts: dummyData});
    
   }
search = event => {
  event.preventDefault();
  let newPosts = [...this.state.posts];
  newPosts=newPosts.filter(post=>{
    
  })
};

handleChange = event => {
  event.preventDefault ();

}
  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} handleChange={this.handleChange}/>
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
