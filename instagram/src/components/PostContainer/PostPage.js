import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
  
    }
  }
  componentDidMount() {
    this.setState({dummyData: dummyData})
  }
  handleSearch = e => {
    const filtered = dummyData.filter(post => {
      return post.username.includes(e);
  });
  this.setState({ dummyData: filtered });
};


render() 	{
return (
  <div className="App">
      <SearchBar dummyData={this.state.dummyData}
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange} />
  

    <PostContainer data={this.state.dummyData}/>

    </div>
    
   )
  } 
} 
export default PostPage;

