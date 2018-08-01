import React from "react";
import PropTypes from "prop-types";

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
			<div className="container">
				<form
					onSubmit={e => {
						e.preventDefault();
						this.props.onLogIn(this.state.username);
					}}
				>
					<div>
						<input
							type="text"
							placeholder="Username"
							required
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	onLogIn: PropTypes.func.isRequired
};

export default Login;
