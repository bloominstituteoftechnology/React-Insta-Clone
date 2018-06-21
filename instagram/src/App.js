import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      dummyData: [],
      placeHolder: 'lambdaschool'
    };
  }

  addNewComment = (event, comment, index) => {
    event.preventDefault();
    const newData = this.state.dummyData.slice();
    newData[index].comments.push({username: this.state.placeHolder, text: comment});
    this.setState({dummyData: newData});
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  render() {
    return (
      <div className="App">  
        <SearchBar />
        <PostContainer calcTime={this.calcTime} data={this.state.dummyData} today={this.state.today} addNewComment={this.addNewComment} />
      </div>
    );
  }
}

const AuthenticatedApp = Authenticate(App)

export default AuthenticatedApp;