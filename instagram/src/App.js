import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      instaPosts: [],
      liked: false,
    }
  }
  componentDidMount(i) {
    this.setState ({instaPosts: dummyData})
    // this.setState ({likes: this.state.instaPosts[i].likes})
  }


  addLike = (username) => {
   const instacopy = this.state.instaPosts.slice();
  for (let i=0; i<instacopy.length; i++){
    if (username === instacopy[i].username) {
     instacopy[i].likes++
    } 
  }
  this.setState({instaPosts: instacopy})

  }

  minusLike = () => {
    this.setState ({liked: false})
  }



  render() {
    return (
      <div className="desktop">
        <SearchBar/>
        <div className="App">
          <PostContainer liked={this.state.liked} minusLike={this.minusLike} addLike={this.addLike} instaPost={this.state.instaPosts}/>
        </div>
      </div>
    );
  }
}

export default App;
