import React from 'react'
import PropTypes from 'prop-types';

const Avengers = props =>

  props.list.map(item =>
    <p key={item.id}>{item.name}</p>
  )

Avengers.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)

}

  export default Avengers
