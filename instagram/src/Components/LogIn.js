import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './LogIn.css';
import Phone from './Phone';
import FadeCarousel from './FadeCarousel';

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

const Container = styled.div`
  max-width: 910px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 1%;
`;

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
      <Container>
        <Phone>
          <FadeCarousel />
        </Phone>

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
          <Button type="submit">Log In</Button>
        </form>
      </Container>
    );
  }
}

LogIn.propTypes = {
  onLogIn: PropTypes.func.isRequired
};

export default LogIn;
