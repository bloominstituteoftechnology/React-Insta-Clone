import React from 'react';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';
import SearchBar from './SearchBar/SearchBar';

class PostPage extends React.Component {
constructor(props) {
    super(props);
    this.state={
        posts: [],
        postFilter: []
    }
}


    handleFilter = search => {
        const postFilter = this.state.posts.filter(item => item.username.includes(search))
        this.setState({
          postFilter
        })
    }

    componentDidMount() {
        console.log('CDM is running', this.state.posts);
        setTimeout(() => {
          this.setState({
            posts: dummyData,
          });
        }, 800);
      }



    render() {
    return (
        <div>
    <SearchBar
      posts={this.props.posts}
      handleFilter={this.handleFilter}
      />

      <PostContainer
        posts={this.state.postFilter.length > 0 ? this.state.postFilter : this.state.posts}
        />


        </div>
    )
}}

export default PostPage;