import React, { Component } from 'react';
import postData from './application-data';

export const Data = (props) => {
    return (
        <div className="Data">
            {props.postData.map((post) => {
                return(
                    <div className="PostList__post" key={post.username}>
                        <img src={post.thumbnailUrl} alt=""/> {post.username}
                        <img src={post.imageUrl} alt="work!"/>
                        {/* buttons */}
                        {post.likes}
                        {post.comments[0].username}
                        {post.comments[0].text}
                        {post.comments[1].username}
                        {post.comments[1].text}
                        {post.comments[2].username}
                        {post.comments[2].text}
                        {/* input */}
                        {post.timestamp}
                    </div>
                )
            })}
        </div>
    ) 
}


// class posts extends component {
    

//     postData.thumbnailUrl postData.username

// postData.imagepost

// }
// class comments extends posts { 
// postData.likes postData.caption

// postData.comments[i]

// postData.timestamp
// }

// export default Data;
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