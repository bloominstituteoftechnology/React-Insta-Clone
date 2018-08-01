import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import styled from "styled-components";

const Button = styled.button`
	width: 100%;
	display: block;
	border-radius: 3px;
	border: 1px solid #64b5f6;
	font-size: inherit;
	padding: 1rem 2rem;
	background-color: #64b5f6;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s;
	&:hover {
		background-color: hsl(207, 89%, 60%);
	}
`;

class Login extends React.Component {
	state = {
		username: ""
	};

	handleChange = event =>
		this.setState({
			username: event.target.value
		});

	render() {
		return (
			<div className="container Login">
				<h1 className="Header__nav-brand Header__nav-brand--big" />
				<a href="#" className="Header__nav-brand">
					<i className="fab fa-instagram Header__brand" />
					Instagram
				</a>
				<form
					className="form"
					onSubmit={e => {
						e.preventDefault();
						this.props.onLogIn(this.state.username);
					}}
				>
					<div className="form__group">
						<input
							className="form__input"
							type="text"
							placeholder="Username"
							required
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form__group">
						<input
							className="form__input"
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<Button type="submit">Submit</Button>
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	onLogIn: PropTypes.func.isRequired
};

export default Login;
