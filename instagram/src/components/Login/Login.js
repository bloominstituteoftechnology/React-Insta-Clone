import React from 'react';


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loginError: ''
        }
    }


    render(){
        return (
            <section className ='login-page'>
                <section className = 'login-container'>
                    <form className = 'login-form' onSubmit= {this.props.submit}>

                        <label htmlFor='username'>Username:</label>
                        <input className='login-input' type='text' name='username'/>

                        <label htmlFor='password'>Password:</label>
                        <input className='login-input' type='password' name='password' />

                        <button className='login-btn' type='submit'>Login</button>
                        
                        <div className='login-error'>{this.props.loginError}</div>
                
                    </form>
                </section>
            </section>
        );
    }

}
export default Login;