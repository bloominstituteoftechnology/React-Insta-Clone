import React from 'react';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
    }
handleInputChange=e=>{
    this.setState({[e.target.name]:e.target.value})
}
handleLoginSubmit =e=>{
    const user = this.state.username;
    localStorage.setItem('user',user);
    window.location.reload();
}
render(){
    return(
    <div> 
            <div>
            <input type="text"placeholder="User Name"name="username"value={this.state.username}onChange={this.handleInputChange}/>
            </div>
            <div>
            <input type="password"placeholder="password"name="password"value={this.state.password}onChange={this.handleInputChange}/>
            </div>
            <button onClick={this.handleLoginSubmit}>LogIn</button>
    </div>
    )
}
}
export default Login;