import React from 'react';
import Comments from '../CommentSection/Comments';
import Likes from '../Likes/Likes';
import './Posts.css';

const Post = (props) => {
    return (
        <div>
            <div className="Post">
                <div> {props.posts.length === 0 ? (
                    <p>"no props yet"</p>
                    ) : (
                        <div>{props.posts.map((post,i) => {
                            return (
                                <div key={i}>
                                    <div>
                                        <div>
                                            <h3>{post.username}</h3>
                                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                                        </div>
                                        <img src={post.imageUrl} alt="a post" />
                                        <div>
                                            <Likes likes={post.likes}/>
                                            <p>{`Posted: ${post.timestamp}`}</p>
                                        </div>
                                    </div>
                                    <Comments comments={post.comments}/>
                                </div>
                            )
                        })}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Post;

