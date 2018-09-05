import React from 'react'
import './App.css'
import dummyData from './dummy-data'
import Search from './components/SearchBar/Search.js'
import PostsPage from './components/PostContainer/PostsPage.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  search = (term) => {
    let data = dummyData.filter(post => post.username.includes(term))
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <Search
          className="Search"
          search={this.search}
        />
        <PostsPage {...this.state} />
      </div>
    )
  }
}

export default App
