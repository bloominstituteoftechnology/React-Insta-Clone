import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (
            <div>
            {props.dummyData.map((post, i) => {
                return (
                    <div className="PostContainer">
                        <p key= {i+1} >{post}</p>
                    </div>
                )}
            )}
            </div>
    );
};

export default PostContainer;
  