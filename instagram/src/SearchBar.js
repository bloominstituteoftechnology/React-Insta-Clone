import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class Searchbar extends Component {

    render() {
        return (
            <form>
                <FormGroup>
                  <ControlLabel>Instergrammer</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter text"
                      />
                </FormGroup>
              </form>
            );
    }
}
