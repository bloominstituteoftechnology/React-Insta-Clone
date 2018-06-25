import React from 'react';

const PostUser = user => {
    console.log(user)
    return <div>
    {user.user.map(user => {
        return <div key={Math.random()}><img src={user.thumbnailUrl} alt='img' /> {user.username}</div>
    })}
    </div>
}
 
export default PostUser;