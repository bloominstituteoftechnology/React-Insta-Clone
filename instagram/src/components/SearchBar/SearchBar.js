import React, { Component } from 'react';
import './SearchBar.css';
import { FormGroup, Feedback, FormControl, ControlLabel, HelpBlock, Glyphicon, PageHeader } from 'react-bootstrap';

class SearchBar extends Component{
    render() {
        return (
            <div className="search-bar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRo0P4SFoEGXk42eagPbi-OUGSwuIKiNmT_duNZWGQNyeIbOz" />
                <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/05/InstagramLogo-730x278.png" />
                <Glyphicon glyph="star" />
                <FormExample />
                <img src="http://images.gofreedownload.net/compass-symbol-6425.jpg" />
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png" />
                <img src="https://t3.ftcdn.net/jpg/01/66/94/54/160_F_166945452_oXjGuxkyUNKj6YJo3sifAOQUwDW6rtEW.jpg" />
                {/* <form>
                    <input type="text" placeholder="search shitty instagram" />
                    <button type="submit">search</button>
                </form> */}
            </div>
        )
    }
}


class FormExample extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            {/* <ControlLabel>Working example with validation</ControlLabel> */}
            <div className="search-input">
                <FormControl
                type="text"
                value={this.state.value}
                placeholder="Search"
                onChange={this.handleChange}
                />
                <FormControl.Feedback />
            </div>
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
        </form>
      );
    }
  }

export default SearchBar