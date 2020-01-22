import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data'; /*Data file being imported */

/* PostsPage is a stateful component in charge of managing the state of
the data in the posts array and searchPosts string */
class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            searchPosts: ""
        };
    }

    /*Search Post Method: 
    - Sets newPosts to equal the state of posts so we can alter the new array
    without altering the original data.
    - Reassign newPosts to equal the filtered array. 
    - Filter takes in a post and returns the post if its username is equal to
    the state of the search field
    - The state is then set to the filtered array*/
    searchPosts = e => {
        e.preventDefault();
        let newPosts = [...this.state.posts];
        newPosts = newPosts.filter(post => {
            return post.username === this.state.searchPosts;
        });
        this.setState({ posts: newPosts });
    }


/*Handle Change Method:
 - Sets the state of the target's(in this case the search input) name to
 equal whatever value is being entered into the target*/
    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

/*componentDidMount sets the state of post to the data we imported at the top of the page*/
    componentDidMount() {
        this.setState({ posts: dummyData });
    }

/* Render is what is actually being shown on the page. It can only return one
element, so everything needs to be wrapped in a div.
This render method returns an instance of the SearchBar and Post Container*/
    render() {
        return (
            <div className="App">
                <SearchBar
                /*Giving the SearchBar component access to the searchPosts
                and handleChange methods in this file */
                    searchPosts={this.searchPosts}
                    handleChange={this.handleChange}
                />
                {/*Giving the PostContainer component access to posts data
                and */}
                <PostContainer
                    posts={this.state.posts}

                />
            </div>
        );
    }
}

/*Exports the  Component so it can be used on other files that ew import it to*/
export default PostsPage;