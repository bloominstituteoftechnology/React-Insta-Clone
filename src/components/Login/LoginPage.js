import React from 'react';
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
username:'',
password: ''
    };
  }
  handleChange = event =>{
    this.setState({[event.target.name]:event.target.value});
  }

  componentDidMount() {

  }
  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render(){
    return(
      <div className="Login">
<form>
  <h4>Login</h4>
  <input name="username" onChange={this.handleChange} value={this.state.username}/>
  <input name="password" onChange={this.handleChange} value={this.state.password}/>
  <button onClick={this.handleLoginSubmit}>Submit</button>
</form>


         </div>
       )

};
}

export default CommentSection;
