import React from 'react';
import PropTypes from 'prop-types';
import './LogIn.css';

class LogIn extends React.Component {
  state = {
    username: ''
  };

  handleChange = event =>
    this.setState({
      username: event.target.value
    });

  render() {
    return (
      <div className="container LogIn">
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onLogIn(this.state.username);
          }}
        >
          <h1 className="Header__nav-brand Header__nav-brand--big">
            <i className="fab fa-instagram Header__brand" />
            Instagram
          </h1>
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
          <button className="button button--submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

LogIn.propTypes = {
  onLogIn: PropTypes.func.isRequired
};

export default LogIn;
