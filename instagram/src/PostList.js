import React from 'react';

const PostList = (props) => {
    return (
        <div>
            {props.postName.map((post) => {
                return (
                    <div>
                        <h3> {post.username } </h3>
                        <h4> <img src = {post.thumbnailUrl} alt = "" /> </h4>
                        <h5> <img src = {post.imageUrl} alt = ""/> </h5>
                        <h6> Likes: {post.likes} </h6>
                        <h7> {post.timestamp} </h7>
                        <h8> {post.comments.map((postChild) => {
                            return(
                                <div>
                                <p1> {postChild.username}: </p1> <tab/>
                                <p2> {postChild.text} </p2> 
                                </div>
                                );
                            })} 
                        </h8>
                    </div>
                );
            })}
        </div>
    );
}

export default PostList;