import React from 'react';
import './postcontainer.css';
import PostUser from '../PostHeader/PostUser';
import PostImg from '../PostBody/PostImg';
import Comments from "../PostComments/Comments";

const Post = props => {
    return(
        <div>

                <div className={'containerPost'} key={props.obj.timestamp}>
                    <>
                        <PostUser usernames={props.obj} usericons={props.obj} />
                        <PostImg postimg={props.obj} />
                        
                    </>
                        <Comments key={props.obj.timestamp + props.obj.username} obj={props.obj} />
                    <>
                        
      
                    </>
                </div>      
        </div>
    )
}

export default Post