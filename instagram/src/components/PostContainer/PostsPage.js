import React from 'react';
import dummyData from '../../dummyData';
import PostsContainer from './PostsContainer'
import SearchBar from '../SearchBar/SearchBarContainer'

class PostsPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            filterPosts: []
        }
    }

    componentDidMount(){
        setTimeout(() =>{
          this.setState({
            posts: dummyData
          });
        }, 1000)
      }
    
      searchPostHandler = event => {
        const posts = this.state.posts.filter( post => {
          if (post.username.includes(event.target.value)){
            return post;
          }
        });
        this.setState({ filterPosts: posts})
      }
    
      render() {
        return (
            <div className="App">
                <SearchBar searchPosts={this.searchPostHandler}/>
                <PostsContainer posts={this.state.filterPosts.length > 0 ? this.state.filterPosts : this.state.posts} />
            </div>
        )
    }

}

export default PostsPage