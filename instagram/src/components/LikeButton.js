import React from 'react';
import '../App.css';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="comments-div">
        <li className="heart-btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? true : false}
          </li>
        <li className="cmt-btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? true : false}
          </li>
      </div>
    );
  }
}

export default LikeButton;
