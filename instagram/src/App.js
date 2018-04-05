import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'data': dummyData,
      'newComment': [],
      'searchField': ''
    };
  }

  componentWillMount() {
    this.setState ({
      data: dummyData,
    })
  }

  render() {
    return (<div className="App">
      <SearchBar />
     <PostContainer />
    </div>);
  };
}

//should deal with the actual effect of liking a post
//uncomment when done setting up likes
// handleLikePost = (toggle, index) => {
// console.log(toggle);
// const { data } = this.state;
// data[index].likes = toggle ? data[index].likes + 1 : data[index].likes - 1; //checks if post is liked, if liked already, unlike if not liked, like it
// // probably will break i dunno
// this.ssetState({'data' : data});
// }



export default App;
