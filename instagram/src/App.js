import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      filteredPosts: []
    };
  }
  render() {
    return (
      <Container className="App">
        <SearchBar />
        {this.state.dummyData.map(post => <PostContainer postProp={post} />)}
      </Container>
    );
  }
}



Container.propTypes = {
  fluid: PropTypes.bool
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
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
  widths: PropTypes.array,
}

export default App;
