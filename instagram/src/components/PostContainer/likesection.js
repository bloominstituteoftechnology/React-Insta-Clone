import React from 'react';
import styled from 'styled-components';

const LikeText = styled.div`
    margin: 10px 15px;
`

const LikesSection = (props) => {
    return (
        <div>
            <div className="d-flex icons">
                <i  onClick={props.incrementLike} className={props.liked ? "fas fa-heart icon" : "far fa-heart icon"}></i><i className="far fa-comment icon"></i>
            </div>
            <LikeText><span className="username">{props.likes} likes</span></LikeText>
        </div>
    );
}
 
export default LikesSection;