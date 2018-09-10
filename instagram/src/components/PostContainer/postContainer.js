import React from 'react';
import dummyData from './components/DummyData/dummy-data.js';

const PostContainer = props => {
(<div>{props.dummyData.map(dummyData => <dummyData key={dummyData.username} dummyData={dummyData} />)}</div>
    );
};
export default PostContainer;