import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
// import CommentSection from './components/CommentSection/CommentSection'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postData: [],
    }  
  }


componentDidMount() {
  setTimeout(() => {
    this.setState({postData: dummyData })
  }, 800)
  
}


  render() {
    
    return (
      <div className="App">
          <SearchBar />
          <PostContainer postItems={this.state.postData} key={Math.random()} />
          
         
      </div>
    );
  }
}

export default App;
