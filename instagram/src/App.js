import React, { Component } from 'react';
import Fuse from 'fuse.js';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

const App = Authenticate(
  class App extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        filteredData: null,
        isEmpty: true,
      };
    }

    logOut = () => {
      localStorage.removeItem('username');
    };

    onSearch = e => {
      e.preventDefault();
      e.target.reset();
      this.setState({data: this.state.data, filteredData: null, isEmpty: true});
    };

    handleSearchChange = e => {
      var filteredData;
      if (e.target.value === '') {
        filteredData = null;
      } else {
        let options = { // options for fuse search below
          shouldSort: true,
          threshold: 0.6,
          location: 0,
          distance: 20,
          maxPatternLength: 30,
          minMatchCharLength: 1,
          keys: ["username"]
        };
        filteredData = new Fuse(this.state.data, options).search(e.target.value);
      }

      this.setState({
        filteredData, 
        isEmpty: !(e.target.value !== ''),
      });
    };

    /* Lifecycle Methods */

    componentDidMount() {
      this.setState({
        data: dummyData,
      });
    }

    render() {
      let data = (this.state.filteredData ? this.state.filteredData : this.state.data)
      return (
        <div className="App">
          <SearchBar 
          logOut={this.logOut}
            onSearch={this.onSearch} 
            onChange={this.handleSearchChange} 
            isEmpty={this.state.isEmpty} />
          <PostsPage data={data} />
        </div>
      );
    }
  }
);

export default App;
