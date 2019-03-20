import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';


class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      searchData: []
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  searchBarHandler = event => {
    const posts = this.state.dummyData.filter( post => {
      if (post.username.includes(event.target.value)) {
        return post
      } else {
        return null
      }
    });
    this.setState({searchData: posts})
  }

  render() {
  return (
    <div>
      <SearchBar searchPosts={this.searchBarHandler}/>
      <PostContainer 
          postData={
            this.state.searchData.length > 0
          ? this.state.searchData
           : this.state.dummyData} 
       />
     </div>
  )
}
}

export default PostsPage;