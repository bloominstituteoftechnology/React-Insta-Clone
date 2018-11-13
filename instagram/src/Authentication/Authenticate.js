import React from 'react' 
import Login from '../components/Login/Login';

const Authenticate = (App) => 
    class extends React.Component {
        constructor (){
            super()
            this.state = {
                logedIn: false,
                userName: '',
                password: ''
            }
        }

        componentDidMount (){
            const userName = localStorage.getItem('userName')
            if (this.state.logedIn === false && userName){
                this.setState({logedIn: true})
            }
        }

        loginUser (event){
            event.preventDefault()
            console.log('Storing')
            const userName = this.state.userName 
            const password = this.state.password
            localStorage.setItem('userName', userName)
            window.location.reload()
            console.log(localStorage.getItem('userName'))
        }

        onUserInputChnage (event){
            this.setState({userName: event.target.value})
        }
        
        onPasswordInputChange (event){
            this.setState({password: event.target.value})
        }

        render(){
            if (this.state.logedIn)
                return (<App />)
            else 
                return (
                <Login onChangeFunction = {{
                    userName: this.onUserInputChnage.bind(this),
                    password: this.onPasswordInputChange.bind(this),
                    loginUser: this.loginUser.bind(this)
                   }} />)

        }
    }
export default Authenticate