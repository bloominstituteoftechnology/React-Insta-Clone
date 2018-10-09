import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'

import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'


class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyData: dummyData
      
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  // updateLikes = () => {
  //   this.setState(prevState => {
  //     return { likes: prevState.likes + 1 }
  //   })
  // }

  newComment = (message, index) => {
    
    this.setState({
      dummyData: dummyData
    })
  }


  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
          <PostContainer 
            postData={this.state.dummyData}
            updateLikes={this.updateLikes}
            commentSubmit={this.newcomment}
          />
      </div>
    );
  }
}

export default App;
