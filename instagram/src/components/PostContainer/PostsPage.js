import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtered: [],
    }
  }

  onSearch = (e) => {
    const filtered = this.state.data.filter((post) => {
      if (post.username.startsWith(e.target.value)) {
        return post;
      }
    });
    this.setState({filtered});
  }

  componentDidMount() {
    this.setState({data: dummyData, filtered: dummyData})
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch}/>
        {
          this.state.filtered.map(obj => {
            return (
              <PostContainer 
                key={obj.username}
                post={obj}
              />
            );
          })
        }
      </div>
      
    );
  }
}

export default PostsPage;