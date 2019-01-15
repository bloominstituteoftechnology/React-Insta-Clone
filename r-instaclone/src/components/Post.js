import React from 'react'

function Post(props) {
    return (
        <div className="postContainer">

        <div className="user">
            <p>{props.info.username}</p>
            <img src= {props.info.thumbnailUrl} className="thumbnail" alt="usertumbnail" />
        </div>


        
        </div> //main div
            

    )}

    export default Post