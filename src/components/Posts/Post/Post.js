import React from 'react';
import './postcontainer.css';
import PostUser from '../PostHeader/PostUser';
import PostImg from '../PostBody/PostImg';
import PostComments from '../PostComments/PostComments';
import PostActions from '../PostBody/PostActions';
import PostLikes from '../PostBody/PostLikes';
import PostCommentForm from '../PostComments/PostCommentForm';
import PostTimeStamps from '../PostBody/PostTimeStamps';

const Post = props => {
    return(
        <div>
        {props.data.map(data => {
            return(
                <div className={'containerPost'}>
                <>
                    <PostUser usernames={data} usericons={data} />
                    <PostImg postimg={data} />
                    <PostActions />
                    <PostLikes postlikes={data}/>   
                  
                </>

                <>
                {props.comments.map(commentdata => {
                    return(
                        <>
                            <PostComments postcomments={commentdata} postcommentsusers={commentdata} />
                            
                        </>
                    )
                    })}
                    <PostTimeStamps posttime={data} />
                    <PostCommentForm />      
                </>
        </div>

            )
        })};
        

        </div>
    )
}

export default Post