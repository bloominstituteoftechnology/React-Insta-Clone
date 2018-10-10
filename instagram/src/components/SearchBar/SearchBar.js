import React from 'react'
import logo from '../../img/glyph-logo_May2016.png'
import { Container, Logo, Text } from './SearchBarStyles'

const SearchBar = ({ searchParam, search, handleSearchInputChange }) => (
  <Container>
    <Logo src={logo} alt="instagram" />
    <Text>Instagram</Text>
    <form onSubmit={search}>
      <input
        type="text"
        placeholder="Search"
        value={searchParam}
        onChange={handleSearchInputChange}
      />
    </form>
  </Container>
)

export default SearchBar
