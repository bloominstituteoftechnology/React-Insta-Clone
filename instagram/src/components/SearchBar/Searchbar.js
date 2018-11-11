import React from 'react'

const Searchbar = props => {
  return (
    <div>
      <input
        value={props.value}
        name="search"
        type="text"
        className="fa fa-input"
        onChange={props.handleChange}
        placeholder="&#xf002; Search"
        />
    </div>
  )
}

export default Searchbar;
