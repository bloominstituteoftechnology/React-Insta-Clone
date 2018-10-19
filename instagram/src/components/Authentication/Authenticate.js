import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../Login/Login'

const Authenticate = (App) => class extends React.Component {
    constructor(){
        super() 

        this.state = {
            login: false 
        }
    }

    componentDidMount(){
        if (!localStorage.getItem('user')){
            this.setState({
                login: false
            })
        }

        else {
            if (localStorage.getItem('user')){
                this.setState({
                    login: true 
                })
            }
        }
    }

    render(){
        if(this.state.login) return <App />
        return <Login />
    
    }

}

export default Authenticate 