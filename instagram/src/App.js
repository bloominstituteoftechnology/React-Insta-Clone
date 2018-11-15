import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import NavBar from './components/NavBar';
import FeedContainer from './components/PostFeed';
//import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dummyData: {}
    };
  }


  componentDidMount() {
    this.initializeDummyData(dummyData);
  }

  //child component syntax
  initializeDummyData = (dummyData) => {
    
    dummyData = dummyData.map((post, index) => post.id=index);

    this.setState(
      { 
        posts: dummyData, 
        loading: false 
      }
    );
  }

  render() {
    if(this.state.loading){
      return <p>loading</p> 
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <FeedContainer posts={this.state.posts} />
        </header>
      </div>
    );
  }

}

export default App;

/*
  username: "philzcoffee",
  thumbnailUrl:
    "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

  imageUrl:
    "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
  likes: 400,
  timestamp: "July 17th 2017, 12:42:40 pm",
  comments: [
    {
      username: "philzcoffee",
      text:
        "We've got more than just delicious coffees to offer at our shops!"
    },
    {
      username: "biancasaurus",
      text: "Looks delicious!"
    },
    {
      username: "martinseludo",
      text: "Can't wait to try it!"
    }
  ]
 */