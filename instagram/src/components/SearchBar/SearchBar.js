import React from 'react'
import logo from '../../img/glyph-logo_May2016.png'
import {
  Container,
  Group,
  Logo,
  Text,
  Input,
  Placeholder,
  Form
} from './SearchBarStyles'

// import sprites
import { Person, Heart, Search } from '../Sprites/Sprites'

const SearchBar = ({ searchParam, search, handleSearchInputChange }) => (
  <Container>
    <Group>
      <Logo src={logo} alt="instagram" />
      <Text>Instagram</Text>
    </Group>

    <Group>
      <Form onSubmit={search}>
        <Input
          type="text"
          value={searchParam}
          onChange={handleSearchInputChange}
        />
        <Placeholder>
          <Search />Search
        </Placeholder>
      </Form>
    </Group>
    <Group>
      <Heart />
      <Person />
    </Group>
  </Container>
)

export default SearchBar
