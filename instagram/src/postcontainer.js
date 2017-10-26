import React, { Component } from 'react';
import postData from './application-data';

export const Data = (props) => {
    return (
        <div className="Data">
            {props.postData.map((post) => {
                return(
                    <div className="PostList__post" key={post.username}>
                        <div className="PostList__top">
                            <img className="PostList__top-thumb" src={post.thumbnailUrl} alt=""/><span className="PostList__top-name">{post.username}</span>
                        </div>
                        <br />
                        <img className="PostList__post-postimage" src={post.imageUrl} alt="work!"/>
                        <br />
                        {/* buttons */}
                        <div className="PostList__post-likes">{post.likes} likes</div>
                        <br />
                        {post.comments.map((comment) => {
                            return (
                            <div className="PostList__comment" key={comment.text}>
                                <span className="PostList__comment-name">{comment.username}: </span><span className="PostList__comment">{comment.text}</span>
                            </div>
                            );
                        })}
                        {/* input */}
                        <br />
                        <div className="PostList__stamp">{post.timestamp}</div>
                    </div>
                )
            })}
        </div>
    ) 
}




 export default Data;
// {
//     username: "philzcoffee",
//     thumbnailUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
//     imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/20066915_1526002357431295_3266739979170086912_n.jpg',
//     likes: 400,
//     timestamp: "July 17th 2017, 12:42:40 pm",
//     comments: [
//         {
//             username: "philzcoffee",
//             text: "We've got more than just delicious coffees to offer at our shops!"
//         },
//         {
//             username: "biancasaurus",
//             text: "Looks delicious!"
//         },
//         {
//             username: "martinseludo",
//             text: "Can't wait to try it!"
//         }
//     ]
// },