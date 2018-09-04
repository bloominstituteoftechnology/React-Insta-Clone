import React, { Component } from 'react';
import dummyData from './dummy-data';
import uuidv4 from 'uuid/v4';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from  './components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('App - constructor()');
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    console.log('App - componentDidMount()');
    this.setState({
      dummyData: dummyData /* could be shortened to just "dummyData since key and value are the same characters" */
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('App - componentDidUpdate()', prevProps, prevState);
  }

  addComment = (newComment) => {
    
  }

  render() {
    console.log('App - render()');
    const {dummyData} = this.state;
    console.log(dummyData);
    return (
      <div className="App">
        <SearchBar />
        {
          dummyData.map(post => {
            return (
              <PostContainer addComment={this.addComment} key={uuidv4()} postData={post} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
