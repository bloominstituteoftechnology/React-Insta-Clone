import React, { Component } from 'react';
import PostContainer from '../PostContainer';
import SearchBar from '../SearchBar';
import dummyData from '../../dummy-data';

import '../../App.css';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      commentsData: [],
      filteredData: ''

    }
  }
  componentDidMount() {
    this.setState ({ commentsData: dummyData });
  }

filterSearch = (e) => {
  const dataSlice = this.state.commentsData.slice();
  const filteredState=dataSlice.filter(item => {
    if(item.username.includes(e.target.value)) {
      return item;
    }
  })
  this.setState({ filteredData: filteredState })
}

render() {
    return (
      <div className="PostsPage">
        
        <SearchBar handleSearch={this.filterSearch} />
        <div > 
          <PostContainer 
            passedState = {
              this.state.filteredData.length >0 ? this.state.filteredData :   this.state.commentsData 
            }
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;
