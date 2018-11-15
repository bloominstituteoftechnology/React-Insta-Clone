import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Post from '../PostContainer/Post';
import PostsPage from '../PostContainer/PostsPage';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';

function CardOne(props) {
    console.log("Card One props", props)
    return (
        <div>
            <SearchBar />
            {/* <PostsPage /> */}
            {/* <PostContainer /> */}
        </div>
    );
}

// class CardOne extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: dummyData
//         }
//     }

// render() {
//     console.log("props from class", props)
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     )
// }
// }

export default CardOne