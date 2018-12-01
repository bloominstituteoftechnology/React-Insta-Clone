import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            postFilter:[]
        };
    }
    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    handleSearch = event => {
        const search = this.state.posts.filter(search => {
            if (search.username.includes(event.target.value)) {
                return search;
            }
        });
        this.setState({ postFilter: search });
    }

    render() {
        return (
            <div className="App">
                <SearchBar
                    handleSearch={this.handleSearch}
                />
                <PostContainer
                    posts={this.state.postFilter.length > 0 ? this.state.postFilter : this.state.posts}
                />
            </div>
        );
    }
}

export default PostsPage;
