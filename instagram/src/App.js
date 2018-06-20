import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comment: '',
    }
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  updateComment = event => {
    this.setState({comment: event.target.value})
  }
  
  addNewComment = (event, ...rest) => {
    event.preventDefault();
    let newData = this.state.data.slice();
    let newComment = {
      username: "GottaPayTheTrollToll291",
      text: rest[1]
    }
    newData[rest[0]].comments.push(newComment);

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
                           commentKey={index}
                           addNewComment={this.addNewComment}
                           updateComment={this.updateComment}
                           commentText={this.state.comment} />
          )}
        </div>
      </div>
    );
  }
}


export default App;

