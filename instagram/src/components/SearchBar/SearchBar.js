import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';

const SearchBar = () => {
    return (
        <Row>
            <Col></Col>
            <Col>
                <Form>
                    <FormGroup>
                        <Input type="search" name="search" id="exampleSearch" placeholder="search"/>
                    </FormGroup>
                </Form>
            </Col>
            <Col></Col>
        </Row>
    );
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        // example size values:
        // 12 || "12" => col-12 or col-`width`-12
        // auto => col-auto or col-`width`-auto
        // true => col or col-`width`
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

Col.propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    // override the predefined width (the ones above) with your own custom widths.
    // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
    widths: PropTypes.array,
}

export default SearchBar;