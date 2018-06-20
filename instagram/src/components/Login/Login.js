import React from 'react' ;

class Login extends React.Component {
    constructor() {
        super() ;
        this.state = {
            username: '',
            password: ''
        }
    }
    grabInput = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }
    submitLoginInfo = () => {
        const loginInfo = `UserName: "${this.state.username}" / Password: "${this.state.password}"` ;       
        localStorage.setItem('userLogin', loginInfo) ;
    }


    render(){
        return(
            
            <form action="">
                <input 
                type="text" 
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.grabInput}
                />

                <input 
                type="password" 
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.grabInput}
                />

                <button onClick={this.submitLoginInfo}>Submit</button>
                <button onClick={
                    ()=>alert('non-op at this time!')
                }>Create Account</button>
            </form>
        
        )
    }

}
export default Login ;