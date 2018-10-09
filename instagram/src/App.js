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
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  searchFunction = event => {
    const posts = this.state.dummyData.filter(searched => {
      if (searched.username.includes(event.target.value)) {
        return searched;      
      }
    });
    this.setState({ dummyData: posts });
  };

  render() {
    if (!this.state.dummyData.length) {
      return <h4>Loading Posts...</h4>;
    }    return (
      <div className="App">
        <div className='top-header'>
          <SearchBar
            search = {this.searchFunction} 
            handleSearchChange = {this.handleInputChange} 
            content= {this.state.dummyData} />
        </div> 
        {this.state.dummyData.map((items, i) => 
          <div key = {i}>
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
