import React from 'react';
import './App.css';
import dummyData from '../dummy-data.js'
import Posts from '../post-components/posts.js'
import SearchBar from '../searchBar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      search: ""
    }
  }

  searchEvent = e => {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <div className="app">
        <header className="search-bar">
          <SearchBar searchHandler={this.searchEvent}/>
        </header>
        <div className="posts">
          <Posts data={this.state.data} search={this.state.search} />
        </div>
      </div>
    );
  }
}

export default App;
