import React, { Components } from 'react';


class PostContainer extends Components {
    constructor(props) {
        super(props);
        }

    render() {
        return (
            <div className = 'PostContainer'>
                <div> {props.posts.map(p => <img src = {p.thumbnailUrl }/> )}
            </div>
            </div>
        )
    }
}

export default PostContainer;

