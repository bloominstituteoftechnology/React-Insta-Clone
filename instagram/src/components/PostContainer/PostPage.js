import React, { Component } from 'react';
import PostContainer from './PostContainer'
import SearchBar from './SearchBar/SearchBar'

class PostPage  extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    
    }
    render() { 
        return ( 
            <React.Fragment className="App-renderer">
            <header className="search-bar">
                <SearchBar search={this.search}/>
            </header> 
            
                <PostContainer posts={this.state.dummyDataList}/>
             </React.Fragment>
        );
    }
}
 
export default PostPage ;