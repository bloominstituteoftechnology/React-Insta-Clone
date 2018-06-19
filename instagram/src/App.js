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
      dfltUser: "philzcoffee",
      newComment: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  handleChange = e => {
    this.setState({newComment: e.target.value})
  }

  addNewComment = (e, index) => {
    e.preventDefault();

    if(!this.state.comment) return null;

    const state = Object.assign({}, this.state)
    
    const newComment = {
      username: this.state.dfltUser,
      text: e.target.value
    };

    let data = this.state.data[index].splice();
    data.comments.push(newComment);
    this.setState({});
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
              index={index}
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
              
              handleChange={this.handleChange}
              addNewComment={this.addNewComment}
              dfltUser={this.state.dfltUser}
              newComment={this.state.newComment}
            />
          );
        })}

      </div>
    );
  }
}

export default App;
