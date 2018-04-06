import React, { Component } from "react"
import "./App.css"
import PostContainer from "./components/PostContainer"
import SearchBar from "./components/SearchBar"
import data from "./dummy-data"
const { Provider, Consumer } = React.createContext()

class App extends Component {
  render() {
    return (
      <Provider value={data}>
        <div className="App">
          <SearchBar />
          <Consumer>
            {context =>
              context.map((dummy, i) => <PostContainer {...dummy} key={i} />)
            }
          </Consumer>
        </div>
      </Provider>
    )
  }
}

export default App
