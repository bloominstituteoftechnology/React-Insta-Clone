import React from 'react';
// import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import './post.css';
import CommentSection from "../CommentSection/CommentSection";
import Likes from "../CommentSection/Likes";
import styled from 'styled-components';
import PostContainer from '../Styled/Reusables';


const ContainerStyle = styled.section`
margin-left: 25%;
    width: 100%;
    max-width: 600px;
    border: solid 1px silver;
    background: lavender;
`;

const Username = styled.div``





const Container = props => {
    console.log(props)
    return (
            <PostContainer type="mainContainer">
                {props.post.id} 
                <section className="userNameAndImage"> 
                    <img src={props.post.thumbnailUrl} alt="thumb" className="thumbnail"/>
                    <div className="username">{props.post.username}</div>
                </section>
                <section className="imagePost">
                    <img src={props.post.imageUrl} alt="lgImage" className="postedImage"/>
                </section>
                <section className="reactions">
                    {/* {<div className="heartContainer"><div className="heart"></div></div>} */}
                    {/* <div className="likes">{props.post.likes} likes </div> */}
                    <Likes like={props.post.likes} />
                    <div className="timeStamp">{props.post.timestamp}</div>
                    <CommentSection comments={props.post.comments} />
                </section>
            </PostContainer> 
    )
}

Container.propTypes = {
    post: PropTypes.shape({
        index: PropTypes.number,
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    })
}

export default Container;