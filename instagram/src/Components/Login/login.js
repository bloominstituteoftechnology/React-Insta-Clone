import React from "react"

//login page requests the user to login and persist the users name in local storage
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            username: "",
            password: "",
        }
    }
    handelInput = (event) => {
        this.setState({
            username: event.target.value,
        })
        
    }
    submitLogin = () => {
        let user = this.state.username
        localStorage.setItem("user", user)
        window.location.reload()
    }
    render() {
        return (
            <>
                <h1>Welcome to Instagram-Clone</h1>
                <h2>Please Login</h2>
                <input
                    tyep="text"
                    placeholder="Username"
                    onChange={this.handelInput}>
                </input>
                <input 
                    type="password"
                    placeholder="Password"
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            event.preventDefault()
                            this.submitLogin()
                        }}
                    }>
                </input>
                <button
                    onClick={this.submitLogin}>
                    Login</button>
            </>
        )
    }
}

export default Login;