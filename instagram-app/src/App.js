import React from 'react';
import dummyData from './dummy-data';
import Header from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'


import './App.css';


class App extends React.Component {

    constructor(){
      super();
      this.state = {
        posts: dummyData
        
      }
      console.log(dummyData)
    }
render() {
  return (
    <div className="App">
      <Header />
      <PostContainer post={this.state.posts} />
    </div>
  
  );
  
}

}

export default App;
