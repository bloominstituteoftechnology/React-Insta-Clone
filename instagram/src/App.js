import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import data from './dummy-data';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {data: []}
  }

  componentDidMount() {
    this.setState({data: data})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <div className='post'>
            <PostContainer postData={post}/>
          </div>
        })}
      </div>
    );
  }
}

App.propTypes = {
  postData: PropTypes.object
}

export default App;
