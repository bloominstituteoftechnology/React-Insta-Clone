import React from 'react'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value });
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        const user = this.state.username;
        if (user === 'rudius' && this.state.password.toLowerCase() !== 'funboy') {
            alert(`Wrong password. Hint: Johns nickname in high school`);
            return;
        }
        if (user === 'plamz' && this.state.password.toLowerCase() !== 'silver') {
            alert(`Wrong password. Hint: Your skill equivelent rank in counter-strike`);
            return;
        }
        localStorage.setItem('user', user)
        localStorage.setItem('password', this.state.password)
        window.location.reload();
    }

    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.handleLoginSubmit}>
                    <input
                        className="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Username..."
                    />
                    <div>
                        <input
                            className="username"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="login-button" onSubmit={this.handleLoginSubmit}>Login</button>
                </form>
            </div>

        )
    }
}

export default Login;