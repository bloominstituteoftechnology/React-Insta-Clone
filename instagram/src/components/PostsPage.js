import React from 'react';
import '../App.css';
import Search from './SearchBar/Search.js';
import PostList from './PostContainer/PostList.js';
import DummyData from '../dummy-data.js';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            dummydata: [],
            searchString: ''
        }
    }

    componentDidMount() {
        this.setState({
            dummydata: DummyData
        })
    }

    handleLike = (t) => {
        let dummy = this.state.dummydata.slice();
        let index = dummy.findIndex((el) => {
            return el.timestamp === t;
        });
        let post = dummy[index];
        post.likes = post.likes + 1;
        dummy[index] = post;
        this.setState({
            dummydata: dummy
        })
    }

    handleSearchString = (e) => {
        e.preventDefault();
        this.setState({
            searchString: e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        let dummy = this.state.dummydata.slice();
        let username = this.state.searchString.toLowerCase();
        console.log("username", username);

        let results = dummy.filter((el) => {
            return el.username === username;
        })
        console.log("results", results);
        this.setState({
            dummydata: results
        })
    }

    getUserName = () => {
        return localStorage.getItem('name')
    }

    render() {
        return (
            <div className="App">
                <div className="loginName">
                    <h3>Logged in as {this.getUserName()}</h3>
                </div>
                <Search handleSearchString={this.handleSearchString} handleSearchSubmit={this.handleSearchSubmit} />
                <PostList postData={this.state.dummydata} className="post-list-container" handleLike={this.handleLike} />
            </div>
        );
    }
}
export default PostsPage;