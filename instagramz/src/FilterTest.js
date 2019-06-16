import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function FilterTest () {
    const data = dummyData;

    const result = data.filter(search => search.username == "fortnite");

console.log(result);

return (
    <div>
        <PostContainer content={result} />
    </div>
)
    


}

export default FilterTest;