import React from 'react';
import Login from '../Login/Login';

const Authentication = WrappedComponent => 
    class Auth extends React.Component{
        constructor(props){
            super(props)
            this.login = this.login.bind(this)
            this.logout = this.logout.bind(this)
            this.state = {
                isLoggedIn: false,
                txtUserName: '',
                txtPassword: ''
            }
        }
        userNameChange = event => { 
            this.setState({txtUserName:event.target.value})
        }        
        passwordChange = event =>{
            this.setState({txtPassword:event.target.value})
        }
        componentDidMount(){
            let userName = localStorage.getItem('igUserName');
            let password = localStorage.getItem('igPassword');
            debugger
            if(userName && password){
              this.setState({isLoggedIn:true})
            } else {
              this.setState({isLoggedIn: false})
            }            
        } 
        login(){
            localStorage.setItem('igUserName',this.state.txtUserName);
            localStorage.setItem('igPassword',this.state.txtPassword);
            this.setState({
                isLoggedIn:true,
                txtUserName:'',
                txtPassword:''
                })
        }
        logout(){
            localStorage.removeItem('igUserName');
            localStorage.removeItem('igPassword');
            this.setState({isLoggedIn:false})
        }
        render(){
            if(this.state.isLoggedIn){
                return <WrappedComponent logout={this.logout}/>
            } else 
            {
                return <Login 
                        userNameChange={this.userNameChange} 
                        passwordChange={this.passwordChange} 
                        login = {this.login}
                        txtUserName = {this.state.txtUserName}
                        txtPassword = {this.state.txtPassword}
                       />
            }
            
        }
    }

export default Authentication