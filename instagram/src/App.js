import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
// import Commentsection from './components/commentsection/commentsection';
// import Postcontainer from './components/postcontainer/postcontainer';
// import Searchbar from './components/searchbar/searchbar';


class App extends Component {
  constructor() {
    super();
    this.state = {
    myData: []
    }
  }

  componentDidMount() {
    this.setState({ myData: dummyData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
