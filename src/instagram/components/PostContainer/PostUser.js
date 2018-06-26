import React from 'react';
import './Post.css'

const PostUser = user => {
    console.log(user)
    return <div className='container'>
        {user.user.map(user => {
            return <div key={Math.random()}>
            <div className='user-head'>
                <img className='user-img' src={user.thumbnailUrl} alt='img' />
                {user.username}
                {console.log(user)}
                </div>
                <div><img className='post-pic' src={user.imageUrl} alt='sumn' /></div>

                <div className='interact'>{user.likes}</div>

                <div className='comments'>{user.comments.map(item =>
                    <p key={item}><strong>{item.username}</strong> {item.text}</p>
                )}</div>

                <div className='add'>
                    <input
                        type='text'
                        name='addComment'
                        placeholder='ADD COMMENT' />
                </div>

            </div>

        })}
    </div>
}

export default PostUser;