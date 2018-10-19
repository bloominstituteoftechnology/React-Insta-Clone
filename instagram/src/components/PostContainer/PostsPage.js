import React from 'react';
// import "./App.css";
// import "../src/Authentication/Authenticate";
 
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

 

class PostsPage extends React.Component {
    constructor() {
        super()

        this.state = {
            posts: [],
            filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({posts: dummyData});
    }

    postsHandler = event => {
        const posts = this.state.posts.filter(posts => {
            if (posts.username.includes(event.target.value)) {
                return posts
            }
        })
        this.setState({filteredPosts: posts})
    }

    render () {
        return (
            <div className = "App">
                <SearchBar />
                <PostContainer /> 
            </div>
        )
    }
    }
j
export default PostsPage;