import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Post from "./Post";
import Icons from "./Icons";
import { StyledP, CommentContainer, Time } from "./Styles"

const PostContainer = props => {
    if (!props.data.length) {
        return <h1>Loading ...</h1>
     }
    
    return (
        <div>
            <div>
                {props.data.map((data, index) => {
                    return (
                        <div key={data.timestamp}>
                        <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username}/>
                        <Icons increment={props.increment}/>
                        <StyledP>{props.likes} likes</StyledP>
                        <CommentContainer>
                        <CommentSection comments={data.comments} />
                        </CommentContainer>
                        <Time>2 HOURS AGO</Time>
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