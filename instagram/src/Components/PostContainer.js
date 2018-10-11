import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Post from "./Post";
import Icons from "./Icons";
import styled from "styled-components";

const PostContainer = props => {
    if (!props.data.length) {
        return <h1>Loading ...</h1>
     }
     const StyledP = styled.p`
     width: 80%;
     margin: 10px 90px;
    display: flex;
    font-weight: bold;
     `
    return (
        <div className="post">
            <div>
                {props.data.map((data, index) => {
                    return (
                        <div key={data.timestamp}>
                        <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username}/>
                        <Icons increment={props.increment}/>
                        <StyledP>{props.likes} likes</StyledP>
                        {/* <p className="likes"> {props.likes} likes</p> */}
                        <div className="comments-container">
                        <CommentSection comments={data.comments} />
                        </div>
                        <p className="time">2 HOURS AGO</p>
                    
                        </div>
                    )
                })}
            </div>
          
        </div>
    )
}


PostContainer.propTypes = {
    data: PropTypes.array.isRequired
}

export default PostContainer;