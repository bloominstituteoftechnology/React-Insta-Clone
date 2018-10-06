import React from 'react';
import './PostContainer.css';

class Posts extends React.Component {
    render() {
        return(
            <div key={this.props.timestamp} className="post">
                {this.props.dummyData.map(postProps => {
                    return (
                        <>
                            <div className="postTop">
                                <img className="profilePic" src={postProps.thumbnailUrl} alt={"profile pic"}/>
                                <h4 className="username">{postProps.username}</h4>
                            </div>
                            <div className="pic">
                                <img className="postPic" src={postProps.imageUrl} alt={"post pic"} />
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Posts;