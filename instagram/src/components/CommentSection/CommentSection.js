import React from 'react';
import PostContainer from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer';


const CommentSection = props => {
    return (
       
        <div>
            {props.data.map(propsInSection => (
                <PostContainer 
                    key ={propsInSection.timestamp}
                    propsInPC = {propsInSection}
                    />
            ))}
        </div>
    );
};



export default CommentSection;