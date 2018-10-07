import React from 'react';
import './postcontainer.css';
import PostUser from '../PostHeader/PostUser';
import PostImg from '../PostBody/PostImg';
import PostComments from '../PostComments/PostComments';
import PostActions from '../PostBody/PostActions';
import PostLikes from '../PostBody/PostLikes';
import PostCommentForm from '../PostComments/PostCommentForm';
import PostTimeStamps from '../PostBody/PostTimeStamps';
import Comments from "../PostComments/Comments";

const Post = props => {
    return(
        <div>

                <div className={'containerPost'}>
                    <>
                        <PostUser usernames={props.obj} usericons={props.obj} />
                        <PostImg postimg={props.obj} />
                        <PostActions />
                        <PostLikes postlikes={props.obj}/>   
                    
                    </>
                        <Comments key={props.obj.timestamp} obj={props.obj} />
                    <>
                        <PostTimeStamps posttime={props.obj} />
                        <PostCommentForm />      
                    </>
                </div>      
        </div>
    )
}

export default Post