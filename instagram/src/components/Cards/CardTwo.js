import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';


function CardOne(props) {
    console.log("Card One props", props.posts)
    return (
        <div>
            <SearchBar />
            <PostContainer 
            posts={props.posts.filter(post => {
                return post.username.includes('fortnite')
            })}
            />
        </div>
    );
}

export default CardOne