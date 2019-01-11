import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';
// import PropTypes from "prop-types";
import '../../App.css';
import styled from 'styled-components';
import logo from '../../images/instagramPost.png';


const LogoHeader = styled.header`
 display: flex;
 flex-direction: column;
`



console.log(logo)


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
        console.log('Component did update')
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
            <LogoHeader>
                <img src={logo} alt="logo" width="150px"/>
              <SearchBar 
                          searchFilteredPosts={this.searchFilter}
              />
            </LogoHeader>
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