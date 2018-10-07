import React from 'react';
import './postcontainer.css';
import PostUser from '../PostHeader/PostUser';
import PostImg from '../PostBody/PostImg';
import PostActions from '../PostBody/PostActions';
import PostLikes from '../PostBody/PostLikes';
import Comments from "../PostComments/Comments";

const Post = props => {
    return(
        <div>

                <div className={'containerPost'} key={props.obj.timestamp}>
                    <>
                        <PostUser usernames={props.obj} usericons={props.obj} />
                        <PostImg postimg={props.obj} />
                        <PostActions />
                        <PostLikes postlikes={props.obj}/>   
                        
                    </>
                        <Comments key={props.obj.timestamp} obj={props.obj} />
                    <>
                        
      
                    </>
                </div>      
        </div>
    )
}

export default Post