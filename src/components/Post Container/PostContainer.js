import React from 'react';
import "./postcontainer.css";
import UserHeaderInfo from "./UserHeaderInfo";


const PostContainer = props => {
    return(
        <>
            <div>
                {props.usernames.map(username => {
                    return <div className={"postContainer"}><div className={"userInfo"}><h1><UserHeaderInfo usernamesdata={username} /></h1></div></div>
                })}
            </div>
        </>
    )
};

export default PostContainer