import React, { Component } from 'react';

import postData from './data/application-data'

import { SearchBar, PostList } from './Components'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postData: []
    }
  }

  componentDidMount = () => {    
    const newState = Object.assign({}, this.state, {postData})
    this.setState(() => newState)
  }
  
  render() {
    const { postData } = this.state
    return (
      <div
        ref="main"
      >
        <SearchBar />
        <PostList postData={postData}/>
      </div>
    );
  }
}

export default App;
