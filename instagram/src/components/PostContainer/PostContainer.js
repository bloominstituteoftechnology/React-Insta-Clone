import React from 'react';
import Comments from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/Comments/Comments';

const PostContainer = props => {
    return (
        <div>
        <div class="what">
            <h1>{props.propsInPC.username}</h1>
        </div>
        <div>
            <Comments />
         
        </div>
        </div>
       
        

    )
    
    
    
}



export default PostContainer;