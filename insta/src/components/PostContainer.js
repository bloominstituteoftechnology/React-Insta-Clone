import React from 'react';

const PostContainer = props => {
    return (
        <div class='post-container'>
            <div>
                 <img src={require('./img/user.jpg')} alt={'user'}></img>
                <h2>Cyanide6033</h2>
            </div>
            <div>
                <img src={require('./img/shop.jpg')} alt={'shop'}></img>
            </div>
        </div>
    );
}

export default PostContainer;