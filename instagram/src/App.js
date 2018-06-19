import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  
  addNewComment = (event, ...rest) => {
    event.preventDefault();
    let newData = this.state.data.slice();
    newData[rest[0]].comments.push(rest[1]);

    this.setState({data: newData});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Insta-Clone!</h1>
          <SearchBar />
        </header>
        <div className="posts">
          {this.state.data.map((post, index) => 
            <PostContainer postInfo={post} 
                           key={index}
                           commentKey={index} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
