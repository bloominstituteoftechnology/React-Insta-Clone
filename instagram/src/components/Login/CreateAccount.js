import React, { Component } from 'react';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
            passValue: '',
            passConfirmValue: '',
            rejected: false,
            createText: 'Passwords do not match'
        };
      }

    createAccount = (e) => {
        if (this.state.passConfirmValue === this.state.passValue) {
            this.setState({rejected: false})
        } else {
            this.setState({rejected: true, createText: 'Passwords do not match'});
            return;
        }

        if (this.state.userValue === '') {this.setState({createText: 'Username is invalid', rejected2: true});return;}
        this.setState({rejected: false})
        
        localStorage.setItem(this.state.userCreate, this.state.passValue);
        this.props.updateCreate(e)
    }

    // Update username value for Create Account
    updateCreateInputValue(e) {
        this.setState({
            userValue: e.target.value
        });
    }

    // Update password value for Create Account
    updateCreatePassValue(e) {
        if (e.which === 13) {
            alert(e);
        }
        this.setState({
            passValue: e.target.value
        });
    }

    updateCreatePassValue2(e) {
        this.setState({
            passConfirmValue: e.target.value
        });

        if (e.target.value === this.state.passValue) {
            this.setState({rejected: false});
            return;
        } else {
            this.setState({rejected: true, createText: 'Passwords do not match'});
        }

    }

    render() {
        return (
            <div className="login">
                <form className="create-form" onSubmit={this.createAccount}>
                    <label className="login-title">Create Account</label><br /><br />
                    <input type="input" value={this.state.userValue} onChange={e => this.updateCreateInputValue(e)} placeholder="Username" />
                    <input type="password" value={this.state.passValue} onChange={e => this.updateCreatePassValue(e)} placeholder="Password" />
                    <input type="password" value={this.state.passConfirmValue} onChange={e => this.updateCreatePassValue2(e)} placeholder="Confirm Password" />
                    <label className={this.state.rejected ? 'login-reject' : 'login-rejected hidden'}>{this.state.createText}</label>
                    <div className="create-buttons">
                        <input type="button" onClick={e => this.createAccount(e)} value="Register" />
                        <input type="button" onClick={e => this.props.updateCreate(e)} value="Cancel" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateAccount;