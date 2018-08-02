import React from 'react';
import styled from 'styled-components';

const LikeText = styled.div`
    margin: 10px 15px;
`

const Username = styled.span`
    margin-left: 5px;
    font-weight: bold;
`

const Icons = styled.div`
    margin-left: 5px;
`

const Icon = styled.i`
    font-size: 25px;
    margin: 10px 10px 0;
    color: #F64F51;
`

const LikesSection = (props) => {
    return (
        <div>
            <Icons className="d-flex">
                <Icon  onClick={props.incrementLike} className={props.liked ? "fas fa-heart" : "far fa-heart"}></Icon><Icon className="far fa-comment"></Icon>
            </Icons>
            <LikeText><Username>{props.likes} likes</Username></LikeText>
        </div>
    );
}
 
export default LikesSection;