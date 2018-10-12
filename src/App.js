import React, { Component } from 'react';
import './App.css';
import dummyData   from "./dummy-data";
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";
import Post from "./components/Posts/Post/Post";
import PropTypes from "prop-types";
import Authenticate from "./components/Login/Authenticate/Authenticate";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      userInput: []
    };
}

changeUserInput(input){
  this.setState({
    userInput: input
  })
}

componentDidMount() {
  this.setState({
    data: dummyData
  })
}

addLike = (event) => {
  event.preventDefault();
  const likesCounter = this.state.counter;
  var likeButton = document.getElementById("likeAction");
  var redLikeButton = document.getElementById("redLikeAction");
  likeButton.style.display = "none";
  redLikeButton.style.display = "inline-flex";

  this.setState({
      counter: likesCounter + 1
  })
}

removeLike = (event) =>{
  event.preventDefault();
  const likesCounter = this.state.counter;
  var likeButton = document.getElementById("likeAction");
  var redLikeButton = document.getElementById("redLikeAction");
  likeButton.style.display = "inline-flex";
  redLikeButton.style.display = "none";

  this.setState({
      counter: likesCounter - 1
  })
}


  render() {
    return (

      <div className="App">
        <SearchbarContainer />
        {this.state.data.map(instance =>{
            return(
        <Post data={this.state.data} obj={instance} key={instance.timestamp}/>
            )})}
        
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
          username: PropTypes.string,
          thumbnailUrl: PropTypes.string,
          imageUrl: PropTypes.string,
          likes: PropTypes.number,
          timestamp: PropTypes.string,
          comments: PropTypes.arrayOf(
              PropTypes.shape({
                  username: PropTypes.string,
                  text: PropTypes.string
              })
          )
      })
  ),
}
export default Authenticate(App);
