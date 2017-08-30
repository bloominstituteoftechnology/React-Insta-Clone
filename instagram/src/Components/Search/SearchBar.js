import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid'
import Input from 'material-ui/Input/Input';

class SearchBar extends Component {
  constructor() {
    super() 
    this.state = {
      onPageTop: 'true',
      searchFocus: false,
      searchValue: ''
    }
  }

  componentDidMount = () => {    
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    // TODO -> setState of window location for SearchBar transition
    // let scrollTop = e.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop / 3 - 60)
  }
  searchFocused = () => {
    const newState = Object.assign({}, this.state, { searchFocus: true })
    this.setState(() => newState)
  }

  searchUnfocused = () => {
    const newState = Object.assign({}, this.state, { searchFocus: false })
    this.setState(() => newState)
  }

  handleChange = (e) => {
    const newState = Object.assign({}, this.state, {searchValue: e.target.value})
    this.setState(() => newState)
  }

  handleClear = () => {
    const newState = Object.assign({}, this.state, {searchValue: ''})
    this.setState(() => newState)
  }

  render() {
    const { searchFocused, searchUnfocused, handleChange, handleClear } = this
    const { searchFocus, searchValue } = this.state
    return (
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid 
            container justify="space-between" style={{maxWidth: '70em', margin: 'auto'}}>
            <Grid item>
              <img 
                alt="instagram logo"
                src={require('../../assets/Instagram_logo.svg.png')} 
                style={{paddingTop: '0.7em', width: '7em'}}
              />
            </Grid>
            <Grid item>
              <Grid container justify="center" style={{paddingTop: '0.6em'}}>
                <Grid item>
                  <IconButton color={searchFocus || searchValue ? 'contrast' : 'default'}>
                    <Icon>search</Icon>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Input
                    style={{paddingTop: '0.2em'}}
                    placeholder="                 Search"
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={searchFocused}
                    onBlur={searchUnfocused}
                  />
                </Grid>
                <Grid item>
                  <IconButton 
                    color={searchValue || searchFocus ? 'default' : 'contrast'}
                    onClick={handleClear}
                  >
                    <Icon>cancel</Icon>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="space-around">
              <Grid item>
                <IconButton>
                  <Icon>explore</Icon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Icon>favorite_border</Icon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Icon>person_outline</Icon>
                </IconButton>
              </Grid>
              </Grid>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
export default SearchBar
