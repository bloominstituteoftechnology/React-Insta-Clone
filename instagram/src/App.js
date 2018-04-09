import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  // calcTime = time => {
  //   const oneDay = (1000*60*60*24);
  //   let d1 = Date.parse(time);
  //   let d2 = Date.parse(this.state.today);
  //   let diff = (Math.round((d2 - d1)/oneDay));
  //   if (diff > 7) return `${diff/14} weeks ago`;
  //   else if (diff > 1) return `${diff} days ago`;
  //   else if (diff < 1) return 'Today'
  // } // to be implemented, issue parsing 17th from July 17th...

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Instagram
          </h1>
        </header>
        <SearchBar />
        <div className="postContainer">
          <PostContainer calcTime={this.calcTime} data={this.state.dummyData} today={this.state.today}/>
        </div>
      </div>
    );
  }
}

export default App;
