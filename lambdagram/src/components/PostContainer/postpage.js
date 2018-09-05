import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/searchbar';
import PostContainer from './postcontainer';

import heart from '../../assets/heart.png';
import heartFilled from '../../assets/heart-filled.png';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instaData: [],
            searchInput: ''
        }
    }

    handleSearch = (event) => {
        event.preventDefault();
        let tmpData = [...this.state.instaData];
        tmpData = tmpData.filter( (post) => {
            if (post.username === this.state.searchInput) {
            // const match = RegExp(`^*${this.state.searchInput}*$`);
            // if(match.test(post.username)) {
                return post;
            }
            return null;
        });
        this.setState({ instaData: tmpData });
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLikes = (event, i) => {
        const tmpData = this.state.instaData;
        if(event.target.src === heart) {
            event.target.src = heartFilled;
            this.setState( (prevState) => {
                tmpData[i].likes = prevState.instaData[i].likes + 1;
                return {instaData: tmpData};
            });
        } else {
            event.target.src = heart;
            this.setState( (prevState) => {
                tmpData[i].likes = prevState.instaData[i].likes - 1;
                return {instaData: tmpData};
            });
        }
    }

    componentDidMount() {
        this.setState({
            instaData: dummyData
        })
    }

    render() {
        return (
            <div className="App">
                <SearchBar 
                    searchInput={this.state.searchInput} 
                    handleSearchInput={this.handleInput} 
                    handleSearch={this.handleSearch} 
                />
                <PostContainer 
                    posts={this.state.instaData} 
                    handleLikes={this.handleLikes} 
                />
            </div>
        );
    }
} 

PostPage.propTypes = {

}

export default PostPage;
