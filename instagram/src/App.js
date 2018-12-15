import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './components/dummy-data'
import PostContainer from './components/PostContainer'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: ''
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    })
  }

  render() {
    if  (!this.state.posts){
      return <div>Loading. . .</div>
    }
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map((post, index) => {
          return (
            <div>
              <PostContainer index={index} post={post} />
              {console.log(post + " " + index)}
            </div>
          
          )
        }
        )
      }
      </div>
    )
  }
}


export default App;
