import React from 'react';
import Post from './PostContainer/Post';
import Comments from './CommentSection/Comments';
import './Card/card.css';

const Card = (props) => {
    // console.log('card props', props.posts.length);
    return (
        <div> {props.posts.length === 0 ? (
            "no props yet"
        ) : (
            <div>
                <p>we have props</p>
                <div>{props.posts.map((post, i) => {
                    return (
                        <div>
                            <Post />
                            <Comments />
                        </div>
                    )
                })}</div>
            
            </div>
        )}
        </div>
    )
}

export default Card;