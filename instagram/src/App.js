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
// handleLikePost = (toggle, index) => {
// console.log(toggle);

// }



export default App;
