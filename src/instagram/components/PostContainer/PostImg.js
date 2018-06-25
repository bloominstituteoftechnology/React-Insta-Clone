import React from 'react';

const PostImg = img => {
    console.log(img)
    return <div>
    {img.img.map( img => {
        return <div key={Math.random()}>
        <img src={img.imageUrl} alt='img' />
        </div>
    })}
    </div>
}
 
export default PostImg;