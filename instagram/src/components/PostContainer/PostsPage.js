import React from 'react';

const postsPage = WrappedComponent => {
  return class extends React.Component {
    render() {
      return {(
        <div className="App">
          <SearchBar data={this.state.data} onSearch={this.onSearch} handleNewSearch={this.handleNewSearch} searched={this.state.searched}/>
          <PostContainer data={this.state.data} users={this.state.users}/>
        </div>
        )} 
    }
  }
  
}


export default PostsPage;