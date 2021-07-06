import React from 'react';
import PostContainer from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer';

import PropTypes from 'prop-types';

const PostSection = props => {
    // console.log(props.data.filter(post);
    return (
        
        <div>
            {props.data
            .filter(post => (
                post.username.includes(props.searchText)))
                .map(propsInSection => (
                        <PostContainer 
                            key ={propsInSection.timestamp}
                            username={propsInSection.inputText}
                            propsInPC = {propsInSection}
                            />
         
            ))}
        </div>
    );
};


PostSection.propTypes = {
    data: PropTypes.array.isRequired
}


export default PostSection;


