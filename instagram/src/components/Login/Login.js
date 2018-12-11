import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Login.css';

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

        };
    }
    handleChange = (e, type) => {
        const current = `${type}Input`;
        this.setState({ [current]: e.target.value }, () => console.log(this.state));
    }
    login = e => {
        e.preventDefault();
        if (!this.state.usernameLoginInput || 
            !this.state.passwordLoginInput ||
            !this.state.usernameLoginInput.trim()) return;
        localStorage.setItem('username', JSON.stringify(this.state.usernameLoginInput));
        window.location.reload();
        return false;
    }
    render(){
        return (
            <div>
                <SearchBar loginPage />
                <div className="container">
                    <section className="login-prompt">
                        <div className="title">
                            <h2>A picture's worth a billion users.</h2>
                            <h3>Register today!</h3>
                        </div>
                        <div className="forms">
                            <form className="login-form" onSubmit={this.login} method="POST">
                                <h4>Login</h4>
                                <input type="text" 
                                    placeholder="Username" 
                                    name="usernameLogin" 
                                    value={this.state.usernameLoginInput}
                                    onChange={(e) => this.handleChange(e, 'usernameLogin')}
                                />
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    name="passwordLogin"
                                    value={this.state.passwordLoginInput}
                                    onChange={(e) => this.handleChange(e, 'passwordLogin')}
                                />
                                <button type="submit">Login</button>
                            </form>
                            <form className="register-form">
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
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Login;