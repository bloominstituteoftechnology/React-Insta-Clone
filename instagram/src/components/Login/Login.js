import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const Container = styled.div`
    box-sizing: border-box;
    position: fixed;
    height: 100%;
    width: 100%;
    padding-top: 80px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginPrompt = styled.section`
    width: 40%;
    height: 75%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    h2 {
        font-size: 3rem;
    }

    h3 {
        font-size: 2rem;
        margin-bottom: 20px;
    }
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
`;

const Forms = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 80%;
    font-size: 1.6rem;

    > * {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
        border-top: 1px solid #222;
        padding: 10px;
        padding-top: 44px;
    }

    h4 {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 15px;
    }
`;

const LoginForm = styled.form`
    border-right: 1px solid #222;

    input {
        margin-bottom: 20px;
    }
`;

const RegisterForm = styled.form`
    justify-content: space-between;
    padding-bottom: 20px;

    .b-day {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
    }
`;

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameLoginInput: '',
            passwordLoginInput: '',
            usernameRegInput: '',
            emailRegInput: '',
            firstNameRegInput: '',
            lastNameRegInput: '',
            passwordRegInput: '',
            birthdayRegInput: '',
            usernameBlank: false,
            passwordBlank: false,

        };
    }
    handleChange = (e, type) => {
        if (type === 'usernameLogin') this.setState({ usernameBlank: false });
        if (type === 'passwordLogin') this.setState({ passwordBlank: false });
        const current = `${type}Input`;
        this.setState({ [current]: e.target.value });
    }
    login = e => {
        e.preventDefault();
        if (!this.state.usernameLoginInput || !this.state.usernameLoginInput.trim()){
            this.setState({ usernameBlank: true });
            return;
        }
        if (!this.state.passwordLoginInput){
            this.setState({ passwordBlank: true });
            return;
        }
        localStorage.setItem('username', JSON.stringify(this.state.usernameLoginInput));
        window.location.reload();
        return false;
    }
    render(){
        return (
            <div>
                <SearchBar loginPage />
                <Container>
                    <LoginPrompt>
                        <Title>
                            <h2>A picture's worth a billion users.</h2>
                            <h3>Register today!</h3>
                        </Title>
                        <Forms>
                            <LoginForm onSubmit={this.login} method="POST">
                                <h4>Login</h4>
                                <input type="text" 
                                    placeholder="Username"
                                    style={this.state.usernameBlank ? {border: '3px solid red'} : {}} 
                                    name="usernameLogin" 
                                    value={this.state.usernameLoginInput}
                                    onChange={(e) => this.handleChange(e, 'usernameLogin')}
                                />
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    style={this.state.passwordBlank ? {border: '3px solid red'} : {}}
                                    name="passwordLogin"
                                    value={this.state.passwordLoginInput}
                                    onChange={(e) => this.handleChange(e, 'passwordLogin')}
                                />
                                <button type="submit">Login</button>
                            </LoginForm>
                            <RegisterForm>
                                <h4>Register</h4>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="usernameReg"
                                    value={this.state.usernameRegInput}
                                    onChange={(e) => this.handleChange(e, 'usernameReg')}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="emailReg"
                                    value={this.state.emailRegInput}
                                    onChange={(e) => this.handleChange(e, 'emailReg')}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="passwordReg"
                                    value={this.state.passwordRegInput}
                                    onChange={(e) => this.handleChange(e, 'passwordReg')}
                                />
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstNameReg"
                                    value={this.state.firstNameRegInput}
                                    onChange={(e) => this.handleChange(e, 'firstNameReg')}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastNameReg"
                                    value={this.state.lastNameRegInput}
                                    onChange={(e) => this.handleChange(e, 'lastNameReg')}
                                />
                                <div className="b-day">
                                    <p>Birthday:</p>
                                    <input 
                                    type="date" 
                                    name="birthdayReg"
                                    value={this.state.birthdayRegInput}
                                    onChange={(e) => this.handleChange(e, 'birthdayReg')} />
                                </div>
                                <button type="submit">Register</button>
                            </RegisterForm>
                        </Forms>
                    </LoginPrompt>
                </Container>
            </div>
        );
    }
}

export default Login;