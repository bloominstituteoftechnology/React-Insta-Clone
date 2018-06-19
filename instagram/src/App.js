import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      username: "philzcoffee",
      comment: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  handleChange = e => {
    this.setState({comment: e.target.value})
  }

  addNewComment = (event, index) => {

  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <SearchBar />

        {this.state.data.map((data, index) => {
          return (
            <PostContainer
              key={index}
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
              
              handleChange={this.handleChange}
              addNewComment={this.addNewComment}
              dfltUser={this.state.username}
              newComment={this.state.comment}
            />
          );
        })}

      </div>
    );
  }
}

export default App;
