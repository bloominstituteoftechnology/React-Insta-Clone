import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import deleteIcon from '../../assets/insta-delete.png';

const Instance = styled.section`
    display: flex;
    align-items: center;
    text-align: left;
    margin-bottom: 10px;

    p {
        margin-right: 10px;
    }
    span {
        font-weight: bold;
        cursor: pointer;
    }
    img {
        height: auto;
        width: 20px;
        cursor: pointer;
    }
`;


///////////////////////////////////////////////////////////////////////////////////////////////


const Comment = props => (
    <Instance>
        <p><span>{props.name}</span> {props.text}</p>
        <img src={deleteIcon} onClick={props.onDelete} alt="Delete button" title="Delete" />
    </Instance>
)

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    onDelete: PropTypes.func,
};

export default Comment;