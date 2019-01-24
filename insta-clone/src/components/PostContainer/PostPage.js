import React from 'react';
import dummyData from '../../dummy-data'
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostPage extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({data: dummyData})
    }

    searchPosts = (event) => {
        const posts = this.state.data.filter(res => {
            if (res.username.includes(event.target.value)) {
                return res
            }
        })

        this.setState({filteredPosts: posts})
    }

    render() {
        return (
            <div>
                <SearchBar searchPost={this.searchPosts}/>
                <PostContainer data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.data}/>
            </div>
        )
    }

}

export default PostPage