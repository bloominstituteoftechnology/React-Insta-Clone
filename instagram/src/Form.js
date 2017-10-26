import React, { Component } from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <FormControl {...props} />
      </FormGroup>
    );
}


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    handleCommentSubmit = (e) => {
        e.preventDefault();
        if (this.state.value === '') return;
        this.props.handleCommentSubmit(this.state.value, this.props.id);
    }
    render() {
        return (<form className="comment-form">
        <FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Add a comment"
            onChange={this.handleChange}
            value={this.state.value}
        />
        {' '}
        <Button type="submit" onClick={this.handleCommentSubmit}>Add</Button>
        </form>);
    }
}

export default Form;