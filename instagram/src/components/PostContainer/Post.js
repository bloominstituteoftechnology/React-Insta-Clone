import React from 'react';

const Post = props => {
    return (
        <div> 
            {props.dummydata.map(data => {
                return (
                    <div>
                    {data.imageUrl}
                    </div>
                        )
                    })}
                </div>
            );
        };

        export default Post;