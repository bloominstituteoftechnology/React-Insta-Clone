import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import './SearchBar.css';
import camera from '../../assets/instacam.png';
import instagram from '../../assets/insta.png';

class SearchBar extends React.Component {
  render() {
    return (
      <Form inline className="SearchBar">

        <div className="logos">
          <img className="insta-cam mr-2 ml-2" src={camera} alt="A little camera" />
          <img className="insta-logo mr-2 ml-2" src={instagram} alt="Instagram"/>
        </div>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input placeholder='🔍 Search' />
        </FormGroup>

        <div className="icons mr-3">
        <span role="img"> ☼ </span>
        <span role="img"> ♡ </span>
        <span role="img"> ⛄ </span>
        </div>

      </Form>
    );
  }
}

export default SearchBar;
