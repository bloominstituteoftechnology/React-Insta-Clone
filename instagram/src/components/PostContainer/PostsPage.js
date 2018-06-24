import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchContainer from '../SearchBar/SearchContainer';
import PostList from './PostList';
import uuidv1 from 'uuid/v1';
class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            instaData: [],
            filteredPosts: [],
            username: '',
        };
        this.searchPost = this.searchPost.bind(this);

    }


    componentDidMount() {
        for(let i = 0; i < dummyData.length; i++) {
            dummyData[i].id = uuidv1();
        }
        this.setState({ instaData: dummyData, filteredPosts: [] });
    }

    changeComment = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    addComment = (e, index) => {
        const comment = e.target.value;
        if (comment === '') {
            return;
        }
        //If the state comment property does not exist then create a new one
        const state = Object.assign({}, this.state);

        if (state[`comment${index}`] === undefined) {
            state[`comment${index}`] = '';
        }

        const instaDataItem = Object.assign({}, this.state.instaData[index]); //
        instaDataItem.comments.push({ username: 'skid', text: comment });
        e.target.value = '';
        this.setState({ instaDataItem });
    }



    addLike = (e, index) => {

        const instaData = this.state.instaData.slice();

        if (e.target.classList.contains('heart--active')) {
            instaData[index].likes--;
            this.setState({ instaData });

            return;
        }
        instaData[index].likes++;
        this.setState({ instaData });
    }

    searchPost = (e) => {
        let instaData = this.state.instaData.slice();
        const filteredPosts = instaData.filter(dataItem => {
            if (dataItem.username.indexOf(e.target.value) === 0) {
                return true;
            }
            return false;
        });
        this.setState({ filteredPosts: filteredPosts });
    }
    handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.reload(false);
    }
    render() {
        return (
            <div className="App">
                <SearchContainer searchHandler={this.searchPost} 
                    handleLogout = {this.handleLogout}/>
                <PostList instaData={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.instaData}
                    changeCommentHandler={this.changeComment}
                    addCommentHandler={this.addComment}
                    addLikeHandler={this.addLike} />
            </div>
        );
    }
}


export default PostPage;