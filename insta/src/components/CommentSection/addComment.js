import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Input, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types'

const AddComment = props =>{
      
    return(
        <form>
        <Container>
        <Row>
                <InputGroup>
                    <Input onKeyDown={props.submit} onChange={props.change} value={props.value}  />
                </InputGroup>
          </Row>
        </Container>
        </form>
    )
}
AddComment.propTypes={
    submit: PropTypes.func.isRequired,
}
export default AddComment;