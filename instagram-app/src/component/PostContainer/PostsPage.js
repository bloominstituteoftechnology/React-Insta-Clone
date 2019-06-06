import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    render(){
        return(
        <div className="App">
            <SearchBar 
                changeHandler={this.changeHandler} 
                newSearch={this.state.search}
                searchFilter={this.searchFilter}
            />

      
            <PostContainer 
                data={this.state.data} 
                filteredPosts={this.state.filteredPosts}
                searchFilter={this.searchFilter}
            />
        </div>
        )
    }
}

export default PostsPage;