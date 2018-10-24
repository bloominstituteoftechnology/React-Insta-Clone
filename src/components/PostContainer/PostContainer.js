import React from 'react';
import styles from './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';
import Post from '../Post/Post.js';

import styled from 'styled-components';


const BigContainer=styled.div`
margin: auto;
border: 1px solid lightgray;
width: 59%;  
`
const TimeStamp=styled.div`
color:gray;
font-size:.5rem;
text-align:left;
margin-left:4.25rem;
margin-bottom:1rem;
`

const PostContainer=(props)=>{
    const posts=props.posts.slice();
    return(
        <div>
            {posts.map((post)=>{
                return(
                    <BigContainer>
                    <Post post={post}/>
                       
                    <CommentSection comments={post.comments} likes={post.likes} id={post.imageUrl} handleChange={props.handleChange} handleNew={props.handleNew} val={props.PCval} onClick={props.onClick}/>
                        <TimeStamp>
                        {post.timestamp}
                        </TimeStamp>
               
                        <button onClick={props.resetLocal}>click to reset</button>

                    </BigContainer>
                  
                 
                )
            }
            )}
   </div> )

}

export default PostContainer;