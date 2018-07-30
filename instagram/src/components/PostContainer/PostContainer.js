import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import './Post.css'

const PostContainer = props => {
    console.log(props.user)
    return (
        <div>
            {props.user.map((user, index) => {
                return <div key={index} className='container'>

                    <div className='user'>
                        <img className='thumbnail' src={user.thumbnailUrl} alt='thumbnail' /> {user.username}
                    </div>


                    <div className='image'>
                        <img className='img' src={user.imageUrl} alt='img' />
                    </div>

                    <div>
                    <i className="far fa-heart"></i> <i className="far fa-comment"></i>
                    </div>

                    <div className='likes'>
                        {user.likes}
                    </div>

                    <div>
                        <CommentContainer comments={user.comments} />
                    </div>

                </div>
            })}
        </div>
    );
}

export default PostContainer;