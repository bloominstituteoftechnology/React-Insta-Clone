import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';



class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }; 
  }

  componentDidMount(){
  	this.setState({dummyData});
  }

  render() {
    return (
      <div className="App">
     		<SearchBar />
        <div className="data">
          {this.state.data.map(data => 
            <PostContainer data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default PostPage;