import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = () => {
    return ( 
        <div>
            <Form inline>
        <FormGroup>
          <Label for="exampleSearch" hidden></Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="Search" />
        </FormGroup>
        </Form>
        </div>
     );
}
 
export default SearchBar;