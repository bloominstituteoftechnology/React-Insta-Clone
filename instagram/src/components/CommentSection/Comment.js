import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserComment=styled.p`
    text-align: left;
    margin-left: 3%;
    font-weight: 'Regular';
`
const Username=styled.span`
    font-weight: bold;
`
const Userpost=styled.span`
    font-weight: normal !important;
`
const DeleteButton=styled.i`
    opacity:0;
    &:hover{
        opacity:1;
    }
`

const Comment=prop=><UserComment>
<Username>{prop.data.username}</Username> <Userpost>{prop.data.text}</Userpost> {prop.data.username===prop.username?
<DeleteButton onClick={()=>prop.commentDelete(prop.itemNumber)} className="fas fa-eraser"></DeleteButton>:null}
</UserComment>

Comment.propTypes={
    data: PropTypes.objectOf(PropTypes.string).isRequired
}


export default Comment;