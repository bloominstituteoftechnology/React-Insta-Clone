import React from 'react';

import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div>
            <div className="navbar"></div>
            <div><br/><br/></div>
            <form>
                <input type="text" name="search" placeholder="Search"/>
            </form>
            <div className="horizontal-bar"></div>
            {props.postData.map((data) => {
                return (
                    <div><br/><br/>
                        <div className="img-container">
                            <div className="img-header">
                                <div className="header-icon-div">
                                    <img className="header-icon-img" src={data.thumbnailUrl} alt={data.username}/>
                                </div>
                                <div className="header-username">{data.username}</div>
                            </div>
                            <img class="img-post" src={data.imageUrl} alt={data.username} width="550" height="550"/>
                            <div className="img-caption">
                                <div className="unicode-size">&#9825; &#128489;</div>
                                <div>{data.likes} likes</div>
                                <div className="comment-section">
                                    {data.comments.map((comment) => {
                                        return (
                                            <div>
                                                    <div><b>{comment.username}</b> {comment.text}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <br/>
                                <div>{data.timestamp}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default PostContainer;