// import React from 'react';

// const CommentInput = (props) => {
// 	return (
// 		<form>
// 			<input value={props.comment} onChange={props.changeComment} />
// 		</form>
// 	);
// };
// export default CommentInput;

import React from 'react';

const CommentInput = (props) => {
	return (
		<form onSubmit={props.submitComment}>
			<input type="text" value={props.comment} placeholder="Add here" onChange={props.changeComment} />
		</form>
	);
};
export default CommentInput;
