import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import LoginPage from "./components/Login/LoginPage"
import Authenticate from "./components/Authenticate/Authenticate"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.dummyData,
      comments: null,
    };

  }

  componentDidMount() {
   /*  this.getDummyData(); */
  }

 
  render() {
   
   
    return (

      <div className="App">
      {/* <div><LoginPage /></div> */}
    
        <div className="searchBar">{dummyData.map((chars, index) => {
  return<SearchBar key={index} char={chars.comments} />})}
        </div>
        <div className="postContainer">{dummyData.map((chars, index) => {
  return <PostContainer key={index} char={chars.username} name={chars.name} thumb={chars.thumbnailUrl} time={chars.timestamp}
    likes={chars.likes} image={chars.imageUrl} comments={chars.comments} keyIndex={index}/>
})}  
    </div>

  </div>
    );
  }
}

export default Authenticate(App);
