import React, { Component } from 'react';
import dummyData from '../../instagram/src/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication.js/Authenticate';


const App = Authenticate (
  class App extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        Empty: true,
        filteredSearch: null,
      };
    }

    logOut = e => {
      localStorage.removeItem('username');
    }

    onSearch = e => {
      e.preventDefault();
      e.target.reset();
      this.setState({
        data: this.state.data, 
        filteredSearch: null,
        Empty: true,
      });
    };

    componentDidMount() {
      this.setState({
        data: dummyData,
      });
    };

    render() {
      let data = (this.state.filteredSearch ? this.state.filteredSearch : this.state.data)
      return (
        <div className='App'>
          <SearchBar 
            logOut={this.logOut}
            onSearch={this.onSearch}
            Empty={this.state.Empty}/>

            <PostsPage data={data}/>
        </div>
      );
    }
  }
);

export default Authenticate(App);
