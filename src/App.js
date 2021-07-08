import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div>
        <SearchBar passedData={this.state.data} />
        <div className="App">
          <PostsPage passedData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Authenticate(App);