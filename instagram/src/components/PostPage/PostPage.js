import React, { Component } from 'react';

import PostContainer from '../../components/PostContainer/PostContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostPage extends React.Component {

    constructor(props) {
        // responsible for setting up the component's initial state - with available data
        super();
        this.state = {
          posts: [],
          search : '',
        };
      }
    
      onInputChange = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
      }
    
      componentDidMount() {
        this.setState( {posts: dummyData} );
      }

      render(){
    return(
    
        <div className='PostPage'>

          <SearchBar search={this.state.search} 
                onInputChange={this.onInputChange}/>
          <PostContainer posts={this.state.posts} search={this.state.search}/>
        </div>
    )
}
}

export default PostPage;