import Login from '../../Login/Login';
import React from 'react';


const Authenticate = App => 
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                open: false
            }
        }
    componentDidMount() {
        if (!localStorage.getItem('user')) {
            this.setState({ open: false });
        } else {
            this.setState({ open: true });
        }
    }
    render() {
        if (this.state.open) return <App />;
        return <Login />
    }
};

export default Authenticate;