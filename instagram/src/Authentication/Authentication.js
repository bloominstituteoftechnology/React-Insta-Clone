import React, { Component } from 'react'
import Login from '../Components/LoginPage/LoginPage'

const Authentication = App => 
    class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                login: false,
                username: '',
                password: ''
            }
        }

        // componentDidMount() {
        //     localStorage.setItem('username', 'ynafey');
        //     localStorage.setItem('password', 'kevinbrack');
        //   }

        componentDidMount() {
            !localStorage.getItem('user')
                ? this.setState({ login: false })
                : this.setState({ login: true })
        }

        render() {
            if (this.state.login) {
                return <App />
            } else {
                return <Login />
            }
        }
    }


export default Authentication