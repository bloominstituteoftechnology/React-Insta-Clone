import React from 'react'
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render() {
        return (
            <div>PostContainer
                <CommentSection />
            </div>
        )
    }
}

export default PostContainer;