import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[]
    };
  }

  componentDidMount(){
    this.setState({posts: dummyData})
  }


  increment = event =>{
    let {posts} = this.state;
    event.preventDefault();

   let likes = event.target.likes;
   console.log(likes);
 
   this.setState({posts});

   


  }


  render() {
    return (
      <div className="App">
      <SearchBar />
      {console.log(this.state.posts)}
      {this.state.posts.map(data =>(
      <PostContainer value={data.likes} postData={data} increment={this.increment}/>
      
      ))
    }
      </div>
    );
  }
}




export default App;
