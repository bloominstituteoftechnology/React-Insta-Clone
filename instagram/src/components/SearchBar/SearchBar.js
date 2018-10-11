import React, { Component } from 'react'
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

class SearchBar extends Component {
  state = {
    focused: false
  }

  focus = () => {
    this.setState({ focused: true })
  }

  blur = () => {
    this.setState({ focused: false })
  }

  render() {
    const { searchParam, search, handleSearchInputChange } = this.props
    const { focused } = this.state
    const { focus, blur } = this

    return (
      <Container>
        <Group>
          <Logo src={logo} alt="instagram" />
          <Text>Instagram</Text>
        </Group>

        <Group>
          <Form onSubmit={search} onFocus={focus} onBlur={blur}>
            <Input
              type="text"
              value={searchParam}
              onChange={handleSearchInputChange}
            />
            <Placeholder focused={focused}>
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
  }
}

export default SearchBar
