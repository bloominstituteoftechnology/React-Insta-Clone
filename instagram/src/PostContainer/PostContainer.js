import React, { Component } from 'react';
import PostHeader from './PostHeader';
import Image from './Image';
import Icons from './Icons';
const PostContainer = (props) =>{
    return(props.data.map((item)=>{
        return(
            <div className= 'post-container'>
                <PostHeader 
                
                />
                <Image 
                
                />
                <Icons 
                
                />
            </div>
        )
    } 
    )
    );
    
}
export default PostContainer;