import React from 'react';
import dummyData from '../../dummyData';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


class PostsPage extends React.Component{
    constructor(){
        super();
        this.state={
            dummyData: [],
            searchKeyword: '',
            posts: []
        }
    }//end constructor
            componentDidMount(){
            this.setState({
                posts: dummyData
  });
  }
  searchKey = (event) => {
    event.preventDefault();
    const searchKey = event.target.value;
    const posts = []
    this.state.posts.filter(post => {
      return post.username.includes(searchKey) ? posts.push(post) : null;
    })
    // is searchkey blank?
    
    searchKey === '' ? this.setState({posts: dummyData}) : this.setState({posts : posts})

  }

  render() {
    return (
      <div className="App">
      <SearchBar search={this.searchKey} />
      {this.state.posts.map((post,index) => {
        return(
          <PostContainer data = {post} key = {post.timestamp} id={post.timestamp}></PostContainer>
        )
      })}
      </div>
    );
  }


}//end postspage component

export default PostsPage;