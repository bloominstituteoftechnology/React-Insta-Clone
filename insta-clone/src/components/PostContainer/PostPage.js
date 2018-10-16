import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import { Post } from "../Styles/StylePost"

class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            search: ""
        };
    }
    componentDidMount() {
        //Mounting the data after it renders.
        this.setState({ data: dummyData });
        const dataCopy = JSON.parse(localStorage.getItem('data'))
        console.log(dataCopy)

    }

    handleSearch = str => {
        const filteredPost = dummyData.filter(post => {
            return post.username.includes(str);
        });
        this.setState({ data: filteredPost });
    };

    render() {


        return (
            <Post>

                    <SearchBar
                        dummyData={this.state.data}
                        handleSearch={this.handleSearch}
                        handleInputChange={this.handleInputChange}
                    />


                    <PostContainer dummyData={this.state.data} />

            </Post>
        );
    }
}

export default PostPage;
