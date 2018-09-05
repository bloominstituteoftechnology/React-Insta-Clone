import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBarComponents/SearchBar';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            post: [],
            postFilter: []
        };
    }

    componentDidMount() {
        this.setState({post: dummyData});
    }

    searchHandler = (event)=> {
        const post = this.state.post.filter(post=> {
            if (post.username.includes(event.target.value)) {
                return post;
            }
        });
        this.setState({postFilter: post});
    };

    render() {
        return (
            <div className='App'>
                <SearchBar 
                    searchedKeyword={this.state.searchedKeyword}
                    searchedPost={this.searchHandler}
                />
                <PostContainer post={this.state.postFilter.length > 0 ? this.state.postFilter: this.state.post} />
            </div>
        );
    }
}

export default Posts;