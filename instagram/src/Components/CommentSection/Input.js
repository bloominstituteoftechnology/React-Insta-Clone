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
		color: #000;
	}
`

class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
	}

	handleInput = event => {
		event.preventDefault()
		this.setState({
			input: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addComment(this.state.input)
		this.setState({
			input: ''
		})
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleInput}
					value={this.state.input}
					type="text"
					placeholder="Add a comment..."
				/>
			</Form>
		)
	}
}

export default Input
