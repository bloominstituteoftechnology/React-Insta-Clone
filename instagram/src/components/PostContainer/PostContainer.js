import React from 'react';
import CommentSection from './components/CommentSection/CommentSection';



 export const PostContainer = (props) => {
        return (
            <div className="Post-Wrapper">
            {this.props.dummyData.map((post => {
                return (
                    <div key={post.timestamp + post.username}>
                    <p> {post.username}</p>
                    <img src={post.thumbnailUrl} alt=""/>
                    <img src={post.imageUrl} alt="" />
                    <p> {post.likes}</p>
                    <p> {post.timestamp}</p>
                    <CommentSection dummyData={this.state.Comments} />

                    </div>
                )
            }))}
            </div>
        )
    };

