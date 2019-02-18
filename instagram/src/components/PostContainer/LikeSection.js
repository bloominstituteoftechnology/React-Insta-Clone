import React from 'react';


/*
Passed as props from Post.js

likes = {this.state.data.likes}
incrementLikes = {this.incrementLikes}

*/


const LikeSection = props => {
    return(
        <div>
            <div className = "icons">
                <img onClick={props.incrementLikes} src="https://img.icons8.com/ios/50/000000/like.png" alt="like post"/>
                <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt = "comment on post"/>
            </div>
                    

            <div className="likes">
                <strong>{props.likes} likes</strong>
            </div>
        </div>
    )
}


export default LikeSection