import React from 'react';
import './login.css'
class Login extends React.Component {
    constructor(props){
        super();
        this.state={
            input: ''
        }
    }
    login = e => {
        console.log('app js login');
        window.localStorage.removeItem('sibasds@yahoo.com');
        window.localStorage.removeItem('sibhar@yahh.com');
        // window.localStorage.removeItem('app__data');
        // e.preventDefault();
        if(window.localStorage.getItem(this.state.input)){
    
        }else{
          window.localStorage.setItem('username', this.state.input);
        }
    }
    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }
    render(){ 
        return (<div className='login'>
            <h1>Loing Form</h1>
            <form action="#" onSubmit={this.login}>
                <label htmlFor="username">Email: </label>
                <input 
                type="email" 
                name="username" 
                id="username" 
                placeholder="Email here" 
                required autoComplete="off"
                onChange={this.handleChange}
                value={this.state.input}
                />

                <label htmlFor="password">Password: </label>
                <input placeholder="Password here" type="password" name="password" id="password" required/>

                <input type="submit" value="Login"/>
            </form>
            
        </div>)

    }
}
export default Login;