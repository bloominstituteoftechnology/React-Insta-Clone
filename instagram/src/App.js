import React, { Component } from 'react';
import PostContainerList from './components/PostContainer/PostContainerList';
import Header from './components/Header/Header';
import dummyData from './components/dummy-data';
import './Style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  addComment = comment => {}

  render() {
    return (
      <div className="App">
        <header className="main-header">{/* camera | Instagram search-bar circle-diamond heart person */}</header>
        <Header />
        <div className="app-container">
          <PostContainerList
          data={this.state.data}
          addComment={this.addComment}
          />
        </div>
      </div>
    );
  }
}

export default App;
