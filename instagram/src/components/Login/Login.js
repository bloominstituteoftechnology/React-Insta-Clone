
import React from 'react';
import styled  from 'styled-components';

const Input = styled.input`
    border: 2px solid black;
    width: 150px;
    height: 35px;
    margin: 20px 0;
`;

const Div = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100$;
    height: 800px;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    width: 40%;
    height: 300px;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    background: lightblue;
`;

const Button = styled.button`
    width: 150px;
    height: 30px;
    margin: 20px 0;
    border: 2px solid black;
    font-family: Monaco;
    font-size: 14px;
    background: lightgrey;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:""
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
             username: event.target.value,
          
        })
    }

    submitLogin = () => {
        window.localStorage.setItem('username', this.state.username);

    }

    render() {
        return (
            <Div>
                <Form onSubmit={this.submitLogin}>
                    <Input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChangeHandler} />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit">Login</Button>
                </Form>
            </Div>
        );
    }
}

export default Login;