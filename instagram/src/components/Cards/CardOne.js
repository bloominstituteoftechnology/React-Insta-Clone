import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Post from '../PostContainer/Post';
import PostsPage from '../PostContainer/PostsPage';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';


function CardOne(props) {
    console.log("Card One props", props.posts)
    return (
        <div>
            <SearchBar />
            <PostContainer 
            posts={props.posts.filter(post => {
                return post.username.includes('philzcoffee')
            })}
            />
        </div>
    );
}

export default CardOne