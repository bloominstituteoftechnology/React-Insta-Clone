import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
	width: 100%;
	margin-top: 0.8rem;
	input {
		width: 96%;
		padding: 1.8rem 0;
		padding-left: 1rem;
		border: none;
		border-top: 1px solid #d6d4d2;
		font-size: 1.6rem;
		font-weight: 500;
		color: #dddddd;
	}
`

class Input extends Component {
	constructor() {
		super()
		this.state = {
			text: ''
		}
	}

	render() {
		return (
			<Form>
				<input
					value={this.state.text}
					type="text"
					placeholder="Add a comment..."
				/>
			</Form>
		)
	}
}

export default Input
