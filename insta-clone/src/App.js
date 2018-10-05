import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {

    // setTimeout(() => {

    // }, 3000)

    this.setState({data: dummyData})
  }

  render() {
    if (!this.state.data.length) {
           return <h4>Loading Post....</h4>
         }
    return (
      <>
        <div className="SearchBar">
          <SearchBar />
        </div>
        <div className="PostContainer">
          <PostContainer dummyData={this.state.data} />
        </div>
     </>
    );
  }
}

export default App;
