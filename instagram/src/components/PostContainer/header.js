import React from "react";
 //header returns username and thumbnail
const Header = props => {
    return (
            <>
                <img className="thumbnail" src={props.post.thumbnailUrl} alt="user thumbnail"/>
                <div className="username">{props.post.username}</div>
            </>
    )
}
 export default Header;