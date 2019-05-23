import React from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'

library.add(faCompass)

class App extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    );
  }

}

export default App;
