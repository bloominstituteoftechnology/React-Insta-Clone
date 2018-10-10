import React, { Component } from 'react'

const Authentication = App => {
    class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                login: false
            }
        }

        componentDidMount() {
            !localStorage.getItem('user')
                ? this.setState({ login: false })
                : this.setState({ login: true })
        }
        render() {
            if (this.state.login) {
                return <App />
            } else {
                return <LoginPage />
            }
        }
    }
}

export default Authentication