// import React from 'react';
import React, { Component } from 'react';

// const PostContainer = props => {
//     return (
//         <>
//             This is the search PostContainer
//         </>
//     )
// }

// export default PostContainer;

class PostContainer extends Component {
	render() {
		return (
			<div className='post-container'>
				<header>
					User logo + Username
				</header>
				<div className='post-container-main-img'>
					Main IMG
				</div>
			</div>
		);
	}
}

export default PostContainer;