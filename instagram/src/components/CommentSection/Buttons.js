import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

const ActionButtons = styled.div`
    .action-buttons i {
        display: flex;
        margin: 10px 2%;
    }

    i:hover {
        cursor: pointer;
    }


    .likes {
        display: flex;
        margin: 0 2%;
        font-weight: bold;
    }
`

const Buttons = (props) => {

    return (
        <ActionButtons>
            <div className='action-buttons'>
                <i onClick={props.addLike} className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <div className='likes'>{props.likes} likes</div>
        </ActionButtons>
    )
}


export default Buttons;