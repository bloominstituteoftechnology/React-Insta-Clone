import React from 'react';


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
        <div className="login">
            <form onSubmit={this.loggedIn}>
                <input id="user" type="text" required></input>
                <input type="password" required></input>
                <button>Login</button>
            </form>
        </div>
    );
}
}

export default Login;