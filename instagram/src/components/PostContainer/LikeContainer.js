import React from "react";
import sc from "styled-components";

const LikeContainerDiv = sc.div`
    display: flex;
`;
const LikeContainerWrap = sc.div`
  height: 10px;
  width: 10px;
  margin: 10px;
`;

const LikeContainer = props => {
    return (
        <React.Fragment>
            <LikeContainerDiv>
                <LikeContainerWrap
                    key='likes-icons-container'
                    onClick={props.addLike}
                >
                    <i className='fa fa-heart' />
                </LikeContainerWrap>
                <LikeContainerWrap>
                    <i className='fa fa-comment' />
                </LikeContainerWrap>       
            </LikeContainerDiv>
            <LikeContainerDiv
                key='likes-container'>
                <LikeContainerWrap>
                    {props.likes}
                </LikeContainerWrap> 
            </LikeContainerDiv>
        </React.Fragment>    
    );
}


export default LikeContainer;