import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage';

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
    this.setState({comment: event.target.value});
  }
  
  addNewComment = (event, index) => {
    event.preventDefault();
    let newData = this.state.data.slice();
    let newComment = {
      username: "GottaPayTheTrollToll291",
      text: this.state.comment,
    }
    newData[index].comments.push(newComment);

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
          <PostsPage data={this.state.data}/>
        </div>
      </div>
    );
  }
}


export default App;
