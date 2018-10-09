import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Container, Row, Input } from 'reactstrap';
import PropTypes from 'prop-types'

const AddComment = props =>{
      
    return(
        <form onSubmit={props.submit} >
        <Container>
        <Row>
                <InputGroup>
                    <Input  onChange={props.change} type="text" value={props.val}/>
                </InputGroup>
          </Row>
        </Container>
        </form>
    )
}
AddComment.propTypes={
    submit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    val: PropTypes.string
}
export default AddComment;