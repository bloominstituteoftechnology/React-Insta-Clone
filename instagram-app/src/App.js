import React from 'react'
import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount() {
    console.log("CDM running");
    this.setState({ post: data });
  }

  render() {
    console.log(this.state.post)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div className='post-container'>
          <PostContainer post={this.state.post} />
        </div>
      </div>
    );
  }
}

export default App;
