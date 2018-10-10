import React, { Component } from 'react';
// import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';
import data from '../src/dummy-data';
import PostList from './components/PostContainer/PostList';

console.log(data);


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log('CDM: Component Did Mount');
    this.setState({posts: data});
    console.log(data);
  }
  
  
  render() {
    return (
      <div className="App">        
        <SearchBar />
        <PostList posts = {this.state.posts} />
      </div>
    );
  }
}

export default App;






// {this.state.users.map(user => (
//   <div>{user.username}</div>
// ))}
