import React from 'react';
import './PostContainer.css';

export default function PostContainer() {
    return (
        <div className="PostContainer">
            <div className="PostContainerTitle">
                <div className="PostContainerTitleImage">
                    <img src="https://cdn-images-1.medium.com/max/2000/1*vOrfclMVms7S4608zxC-ig.jpeg"></img>
                </div>
                <div className="PostContainerTitleName">
                    <p>philzcoffee</p>
                </div>
            </div>
            <div className="PostContainerImg">
                <img src="https://cdn-images-1.medium.com/max/2000/1*vOrfclMVms7S4608zxC-ig.jpeg"></img>
            </div>
        </div>
    )
}
