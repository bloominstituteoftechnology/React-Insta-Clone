import React, { Component } from 'react';
// Components
import SearchBar from '../SearchBar/SearchBar';
import Posts from './Posts';

// Data
import dummyData from '../../dummy-data';

class PostsPage extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            searchText: ''
        }
    }

    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(e.target.value);
    }

    logout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    render() {
        return ( 
            <>
                <SearchBar 
                    searchText={this.searchText} 
                    handleChange={this.handleChange}
                    logout={this.logout}
                />

                <Posts 
                    posts = { this.state.posts } 
                    handleChange={this.handleChange} 
                    commentText={this.state.commentText}
                />  
            </>
        );
    }
}

export default PostsPage;