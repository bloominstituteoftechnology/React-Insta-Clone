import React, { Component } from 'react';
import  postData  from './application-data.js';
import  SearchBar  from './SearchBar.js';
import  PostContainer  from './PostContainer.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postData: []
    }
  }

  componentDidMount = () => {    
    this.setState({postData: postData});
  }

  render() {
    return (
      <div>
        <SearchBar />
        {postData.map((post, i) => 
          <PostContainer key={i} postData={post} />
        )}
      </div>
    );
  }
}

export default App;
