import React from 'react';
// import styled from 'styled-components';
import Form from './LoginStyles';
import instaTitle from '../SearchBar/insta-title.png';
import Button from './ButtonStyles';
import Input from './InputStyles'



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username : "",
            password : ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const inputName = this.state.username
        localStorage.setItem('user', inputName)
        window.location.reload()
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                <img className="insta-title" alt="instagram title" src={instaTitle} />
                <br/>
                    <Input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Input 
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Button type="slategrey">Login</Button>
                </Form>
            </div>
        )
    }

}

export default Login;