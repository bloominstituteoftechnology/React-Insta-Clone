import React, {Component} from 'react';
import dummyData from './../../dummy-data'
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";



class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({data: dummyData})
    }


    filterPost = (event) => {
        event.preventDefault();
        let posts = this.state.data.slice().filter(post => {
            if (post.username.includes(event.target.value)) {
                return post
            }
        });
        this.setState({filteredPosts:posts})
    };


    render() {
        return (
            <div className='app'>
                <SearchBar filterPost={this.filterPost}/>
                <PostContainer data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.data}/>
            </div>
        )
    }
}

export default PostsPage;
