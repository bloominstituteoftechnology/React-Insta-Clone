import React from 'react';

const PostContainer = props => {
    return(
        <div>
            {props.dummyData.map(data =>
            <div key={data.username}>{data}</div>
            )}
        </div>
    );
}
export default PostContainer;