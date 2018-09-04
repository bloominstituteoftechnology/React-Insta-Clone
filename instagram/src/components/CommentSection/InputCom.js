import React from 'react';

import styled from 'styled-components';

const FlexComment = styled.div`
	display:flex;
	align-items: center;
	justify-content: space-between;
	> p {
		font-size: 1.8rem;
	}
`;


const InputCom = (props) => {
	return (
		<FlexComment>
			<form onSubmit={props.addNew}>
				<input 
					type='text-area'
					placeholder="Add a comment..." 
					onChange={props.commentHandle} 
					value={props.comment}
				/>
			</form>
			<p>...</p>
		</FlexComment>
	)
}

export default InputCom;