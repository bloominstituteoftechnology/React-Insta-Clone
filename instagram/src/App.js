import React, { Component } from 'react';
import './App.css';

import CommentSection from './components/CommentSection/commentsection'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/searchbar'


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
      dummyData:[],
      searchTerm: ''
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  searchFunction = event => {
    event.preventDefault();
    console.log('Nice Search');
  }

  render() {
    console.log(this.state);
    if (!this.state.dummyData.length) {
      return <h4>Loading Posts...</h4>;
    }    return (
      <div className="App">
        <div className='top-header'>
          <SearchBar 
            term={this.state.searchTerm} 
            search = {this.searchFunction} 
            handleSearchChange = {this.handleInputChange} 
            content= {this.state.dummyData} />
        </div> 
        {this.state.dummyData.map((items, i) => 
          <div className='posty' key = {i}>
            <PostContainer content= {items} />
            <CommentSection 
              comments= {items.comments}
              extras= {items} 
              />
          </div>
          )}
      </div>
    );

  }
}

export default App;
