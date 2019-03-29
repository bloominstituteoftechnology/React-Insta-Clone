import React from 'react'
import {chgeckAuth} from '../utils'
const withAuthenticate = Login => PostPage =>
	class extends React.Component{
		constructor(){
			super()
			this.state = {
				isLoggedIn:false,
				logginError:{}
			}
			this.useCache = false;
			this.clearCacheFlag = true;
		}
		
		isCredentialValid = (username, password) =>{
			return username.length > 2 && password.length >2
		}
		
		login = (username, password) =>{
			console.log('username', username)
			console.log('password', password)
			if(this.isCredentialValid(username, password)){
				this.setState({isLoggedIn: true})
			}else{
				this.setState({loginError:{type:'length', message:'You need to have ....'}})
			}
		}
		
		logout = () =>{
			console.log('onLogout')
			this.setState({isLoggedIn: false})
		}
		
		render(){
			if(!this.state.isLoggedIn){
				return <Login
						onLogin={this.login}
						onLogout={this.logout}
						loginError={this.state.loginError }
					/>
			}
			return <PostPage onLogout={this.logout} />
		}
	}


export default withAuthenticate
