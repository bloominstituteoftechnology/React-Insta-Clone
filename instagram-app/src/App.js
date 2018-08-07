import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';




class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    };
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Body posts={this.state.posts} />
      </div>
    );
  }
}

const Header = () => {
  return (
    <div>
      <i class="fab fa-instagram"></i>
      <img src="https://jennpirri.files.wordpress.com/2013/05/instagram-logo.png"></img>
      <div class="search">
      <i class="fas fa-search"></i>
        <input type="text" class="search-input" id="search-input" placeholder="Search"></input>
      </div>
      <i class="far fa-compass"></i>
      <i class="far fa-heart"></i>
      <i class="far fa-user"></i>
    </div>
  )
}



const Body = props => {
  return (
  <div>{props.posts.map(each => <ContentContainer content={each} />)}</div>
  );
};




const ContentContainer = props => {
  return (
      <div>

          <div>
            <img src={props.content.thumbnailUrl}></img>
            {props.content.username}
          </div>
          <br></br>
          <div>
            <img src={props.content.imageUrl}></img>
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
          </div>

          <div>
            <p>{props.content.likes} likes</p>
          </div>

          <comments>
            <div>{props.content.comments.map(each => <Comments comments={each} />)}</div>
          </comments>
          <br></br>
          <add>
            <input type="text" placeholder="Add a comment..."></input>
          </add>
      </div>
    
  )
};

const Comments = props => {
  return (

    <div>
    {props.comments.username} {props.comments.text} 
    
    </div>
  )
};





export default App;
