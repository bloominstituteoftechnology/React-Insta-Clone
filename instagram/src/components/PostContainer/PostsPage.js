import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


class PostsPage extends Component {
    constructor (){
        super();
        this.state={
          posts: [],
          search: ""
        };
    }
    search = event => {
        event.preventDefault();
        let newPosts = [...this.state.posts];
        newPosts = newPosts.filter(post => {
          return post.username === this.state.search; 
        });
        this.setState({ posts: newPosts });
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };
    
    componentDidMount(){
        this.setState({posts:dummyData});
    }

    render() {
    // console.log(this.state.posts);
        
        return (
            <div className="post-page">
                
                <SearchBar search={this.search} handleChange={this.handleChange} />
                <PostContainer 
                    posts={this.state.posts}
                    addNewComment={this.addNewComment}
                    handleInputComment={this.handleInputComment}/>
            </div>
        );
    }

}

export default PostsPage;