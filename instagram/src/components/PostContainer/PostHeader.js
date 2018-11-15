import React, { Component } from 'react';
import styled from 'styled-components';
import Username from '../Styles/Styles';
import { Route, Link } from "react-router-dom";

// import CardOne from '../Cards/CardOne';

const PostHeader = props => {
    return (
        <div className='top-of-card'>
            <img className='thumbnail' src={props.thumbnailUrl} />
            <Username type="primary">
                <Link to={`/card/${props.index}`}>  {props.username} </Link>
            </Username>
        </div>
    )
}
{/* <Link to="/card">Home</Link> */}
{/* <Route exact path="/card/0" component={CardOne} /> */}

export default PostHeader