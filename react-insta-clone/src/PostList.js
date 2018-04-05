import React from 'react';
import './PostList.css';
import { CommentList } from './CommentList.js';

export const PostList = props => {
    return <div>{props.postProps.map((aPost, index) => (
        <div key={index} className="Post">
            <div className="Post__Head">
                <img className="UserPicture" src={aPost.thumbnailUrl} alt="Profile Picture"/>
                <p className="Username">{aPost.username}</p>
            </div>
            <img className="Post__Img" src={aPost.imageUrl} alt="User Image" />
            <div className="Post__Foot">
                <section className="Social">
                    <a href="#"><img className="Social__Heart" src="https://openclipart.org/image/2400px/svg_to_png/234835/heart-outline.png" alt="Like"/></a>
                    <p className="Social__Likes">{aPost.likes} likes</p>
                </section>
                <CommentList comments={aPost.comments} />
            </div>
        </div>
    ))}</div>;
};