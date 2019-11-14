import React from 'react';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer'


import './App.css';


class App extends React.Component {

    constructor(){
      super();
      this.state = {
        posts: dummyData,
        searchPost: ""
        
      }
      
    }

handleChange = (e) => {
  console.log(this.state.searchPost)
  this.setState({searchPost: e.target.value})
}


render() {
  let search = this.state.posts.filter(post => {
    return post.username.toLowerCase().includes(this.state.searchPost.toLocaleLowerCase())
  })
  return (
    <div className="App">
      <Header handleChange={this.handleChange}/>
      <PostContainer posts={search} />
    </div>
  
  );
  
}

}

export default App;
