import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';


class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPosts: [],
            filteredPosts: []
        };
      }

      componentDidMount() {
        this.setState({ userPosts: dummyData });
      }
    
      componentDidUpdate(){
        console.log('Did it work?')
      }
    
      searchFilter = event => {
        let filteredPostResults = this.state.userPosts;
        filteredPostResults = filteredPostResults.filter((post) => {
          console.log("filtered posts: ", filteredPostResults)
          let userPostName = post.username.toLowerCase();
               if (userPostName.includes(event.target.value)){
          return post;
        }
        });
        this.setState({
          filteredPosts: filteredPostResults
        })
      }
    render () {
        return (
            // <div className="App">
            <div>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </header>
            <SearchBar 
                        searchFilteredPosts={this.searchFilter}
            />
            <PostContainer 
            posts={
            this.state.filteredPosts.length > 0 
            ? this.state.filteredPosts
            : this.state.userPosts
            } 
            />
            {/* <CommentSection commentInput={this.state.userPosts} /> */}
             </div>
        );
    }
}



  export default PostsPage;