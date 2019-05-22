import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import instagram from '../../instagram.svg';

const LoginPage = styled.div `
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Form = styled.div `
    display: flex;
    flex-direction: column;
    width: 70%;

    & input {
        margin: 1rem 0px;
    }

    & button {
        margin: 0 auto;
        width: 100%;
    }
`
class Login extends React.Component {
    constructor(){
        super();
        this.setState = {}
    }
    loggedIn = (e) => {
        e.preventDefault();
        const user = document.getElementById("user").value;
        console.log(user.value)
        localStorage.setItem('user', user)
        window.location.reload()
      }
      render() {
    return (
        <LoginPage>
        <img src={instagram} className="instagram-logo" alt="logo" />
        <h1>Instagram</h1>
            <Form onSubmit={this.loggedIn}>
                <input id="user" type="text" required></input>
                <input type="password" required></input>
                <Button color="success" onClick={this.loggedIn}>Login</Button>
               
            </Form>
        </LoginPage>
    );
    }
}


Button.propTypes = {
    active: PropTypes.bool,
    'aria-label': PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
  
    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
      ]))
    ]),
  
    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  
    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  
    // use close prop for BS4 close icon utility
    close: PropTypes.bool,
  }
  
  Button.defaultProps = {
    color: 'secondary',
    tag: 'button',
  }
export default Login;