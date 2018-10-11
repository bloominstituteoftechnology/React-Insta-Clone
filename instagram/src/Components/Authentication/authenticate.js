import React from "react"

const Authenticate = (App) =>
    class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                username: "",
                
            }
        }
        render() {
            return <App />
        }
    }

export default Authenticate;