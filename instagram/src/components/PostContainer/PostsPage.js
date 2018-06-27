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
    alert('search');
    //let data = this.state.data.slice();
    //filtered = data.filter(obj => (e.target.search.value === obj.username));
    //this.setState({filtered});
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch}/>
        {
          this.state.data.map(obj => {
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