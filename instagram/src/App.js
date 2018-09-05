import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      filter: ""
    }
  }

  componentDidMount(){
    this.setState(
      {entries: dummyData}
    )
    console.log(dummyData);
  }

  updateFilter = e => {
    this.setState({
      filter: e.target.value
    })
  }

  filterEntries = e => {
    e.preventDefault();
    let new_entries = dummyData.filter(entry => JSON.stringify(entry).includes(this.state.filter))
    this.setState({
      entries: new_entries,
      filter: ""
    })
  }

  render() {
    // dummyData.forEach(item =>
    // console.log(item))
    // dummyData.forEach(item =>
    // console.log(typeof item))
    // console.log(this.state.entries);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Animals: by Luisan</h1>
        </header>
        <SearchBar
          value={this.state.filter}
          updateFilter={this.updateFilter}
          filterEntries={this.filterEntries}
        />
          {this.state.entries.map(entry =>
          <PostContainer entry={entry} key={entry.timestamp}/>
        )}

      </div>


    );
  }
}

// App.propTypes = {
//   entry: PropTypes.shape({
//     comments: PropTypes.array.isRequired,
//     imageUrl: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     timestamp: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//   }).isRequired
// }

export default App;
