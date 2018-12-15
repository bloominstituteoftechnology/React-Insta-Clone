import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Username } from '../assets/styles/reusable-components';

const Instance = styled.section`
    display: flex;
    align-items: center;
    text-align: left;
    margin-bottom: 10px;

    p {
        margin-right: 10px;
    }
    span {
        font-size: 1.8rem;
        cursor: pointer;

        &:active {
            transform: translateY(1px);
        }
    }
`;


///////////////////////////////////////////////////////////////////////////////////////////////


const Comment = props => (
    <Instance>
        <p><Username>{props.name}</Username> {props.text}</p>
        <span className="far fa-times-circle" onClick={props.onDelete} title="Delete"></span>
    </Instance>
)

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    onDelete: PropTypes.func,
};

export default Comment;