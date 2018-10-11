import React from 'react';

const checkAuth = Login => PostPage => props =>{
    if(props.password) {
        return (
            <PostPage {...props} />
        )
    }
    return <Login {...props} />
}

export default checkAuth;