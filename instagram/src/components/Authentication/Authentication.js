import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import { getPositivePatterns } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/fast-glob/out/managers/tasks';
const Authenticate = App =>
    class auth extends React.Component {
        constructor() {
            super()
            this.state = {
                user: '',
                pass: '',
                loginStatus: false
            }
        }
        userHandler = event => {
            this.setState({
                user: event.target.value,
            });

        };
        passHandler = event => {
            this.setState({
                pass: event.target.value,
            });

        };

        submitHandler = event => {
            localStorage.setItem('user', this.state.user)
            this.setState({
                loginStatus: true
            })
        }
        render() {
            if (this.state.loginStatus ===false) {
                return (
                    <LoginPage
                        user = {this.state.user}
                        pass = {this.state.pass}
                        passHandler ={this.passHandler}
                        userHandler = {this.userHandler}
                        submitHandler = {this.submitHandler}
                    />
                )
            } else {
                return <App user = {this.state.user}/>
            }
        }
    }


    export default Authenticate