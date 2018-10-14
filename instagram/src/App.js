import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
/* import LoginPage from "./components/Login/LoginPage" */
import Authenticate from "./components/Authenticate/Authenticate"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     /*  dummyData: this.props.dummyData, */
      comments: null,
    };

  }

  componentDidMount() {
  /*  this.setState({ dummyData }) */
   console.log(this.state)
  }

 
  render() {
   
 //need to have the postContainer grab info from the state
 // so i can filter the data when a search is made  
    return (

      <div className="App">
     
    
        <div className="searchBar">{dummyData.map((chars, index) => {
  return<SearchBar key={index} char={chars.username} />})}
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
