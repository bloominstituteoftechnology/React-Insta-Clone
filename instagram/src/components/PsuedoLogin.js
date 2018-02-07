import React from 'react';

class PsuedoLogin extends React.Component {
    state = {
        entry: '',
    }

    handleChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    render() {
        return (
            <div className='login-container'>
                <input type='type' value={this.state.entry} placeholder='Username -> Click' onChange={this.handleChange} />
                <button onClick={() => {this.props.login(this.state.entry)}}>Login</button>
            </div>
        );
    }
}


export default PsuedoLogin;