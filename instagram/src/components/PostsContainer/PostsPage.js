import React, {Component} from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
    constructor() {
        super ();
        this.state= {
            posts: [],
            filteredPosts:[]
        };
    } //Constructor

    componentDidMount(){
        this.setState({ posts:dummyData});
    }

    searchPostsHandler = event => {
        const posts = this.state.posts.filter (p => {
            if (p.username.includes(event.target.value)){
                return p;
            }
        });
        this.setState({ filteredPosts:posts});
    };

    render(){
        return (
            <div className ="App">
                <SearchBar
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.searchPostsHandler}
                />
                <PostsContainer
                    posts={
                        this.state.filteredPosts.length > 0
                        ? this.state.filteredPosts 
                        : this.state.posts
                    }
                />
            </div>
        );
    }

}// PostsPage Class

export default PostsPage;

