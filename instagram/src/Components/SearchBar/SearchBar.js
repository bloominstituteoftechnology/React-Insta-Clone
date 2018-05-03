import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <Form inline className="SearchBar">

        <div className="logos">
          <img src="" alt="A little camera" />
          <img src="" alt="Instagram"/>
        </div>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input placeholder='🔍 Search' />
        </FormGroup>

        <div className="icons">
        </div>

      </Form>
    );
  }
}

export default SearchBar;
