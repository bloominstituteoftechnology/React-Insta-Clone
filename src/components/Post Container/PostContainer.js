import React from 'react';
import "./postcontainer.css";
import UserHeaderInfo from "./UserHeaderInfo";
import UserIcon from "./UserIcon";
import PostImg from "./PostImg";


const PostContainer = props => {
    return(
                props.usernames.map((username, index) => {
                    return(
                    <div className={"postContainer"} key={index}>
                        <div className={"userInfo"}>
                            <div>
                                <UserIcon icons={username}/>
                            </div>
                            <h1>
                                <UserHeaderInfo usernamesdata={username} />
                            </h1>
                            <div>
                                <PostImg postimg={username}/>
                            </div>
                        </div>
                    </div>
                    )
                })
    )
};

export default PostContainer