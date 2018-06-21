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

    createUser = e => {
        alert("You wish muahhaa");
    }
    handleLoginSubmit = e => {
        e.preventDefault();
        const user = this.state.username;
        if (user === '' || this.state.password === '') { alert('Please fill out required fields'); return };
        if (user.toLowerCase() === 'rudius' && this.state.password.toLowerCase() !== 'funboy') {
            alert(`Wrong password. Hint: Johns nickname in high school`);
            this.setState({ password: '' })
            return;
        }
        if (user.toLowerCase() === 'plamz' && this.state.password.toLowerCase() !== 'trumplover') {
            alert(`Wrong password. Hint: You will never guess it`);
            this.setState({ password: '' })
            return;
        }
        if (user.toLowerCase() === 'dilly' && this.state.password.toLowerCase() !== 'bronze') {
            alert(`Wrong password. Hint: Your skill equivelent rank in overwatch`);
            this.setState({ password: '' })
            return;
        }
        if (user.toLowerCase() === 'flint' && this.state.password === 'plamzisascrub') {
            localStorage.setItem('user', user)
            localStorage.setItem('password', this.state.password)
        }

        window.location.reload();

    }

    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.handleLoginSubmit}>
                    <div>
                        <img alt="instagram logo" src="https://rawgit.com/LambdaSchool/React-Insta-Clone/115c6b9b980fa9acc57494680a9d5951f9f35ee1/instagram/src/assets/iglogo.png" className="login-image" />
                    </div>
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
                <button type="submit" className="login-button" onClick={this.createUser}>Create User</button>
            </div>

        )
    }
}

export default Login;