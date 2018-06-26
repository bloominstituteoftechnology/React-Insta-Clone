import React from 'react';

const PostUser = user => {
    console.log(user)
    return <div>
        {user.user.map(user => {
            return <div key={Math.random()}>
                <img src={user.thumbnailUrl} alt='img' />
                {user.username}
                {console.log(user)}
                <div><img src={user.imageUrl} alt='sumn' /></div>
                <div>{user.likes}</div>
                <div>{user.comments.map(item =>
                    <p key={Math.random()}><strong>{item.username}</strong> {item.text}</p>
                )}</div>
                
            </div>

        })}
    </div>
}

export default PostUser;