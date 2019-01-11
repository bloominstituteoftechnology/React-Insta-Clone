import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Comment = props => {

		const Username = styled.p `
			margin: 0px 0px 0px 10px;
		`

	return (
		<div>
			<h4>{props.comment.text}</h4>

			<Username> - {props.comment.username} </Username>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		text:PropTypes.string,
		username: PropTypes.string
	})
}


export default Comment;