import React, { Component } from 'react';
import styled from 'styled-components';
import Username from '../Styles/Styles';

const PostHeader = props => {
    return (
        <div className='top-of-card'>
            <img className='thumbnail' src={props.thumbnailUrl} />
            <Username type="primary">
                {props.username}
            </Username>
        </div>
    )
}

export default PostHeader