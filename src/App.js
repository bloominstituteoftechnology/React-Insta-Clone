import React, { Component } from "react"
import "./App.css"
import PostContainer from "./components/PostContainer"
import SearchBar from "./components/SearchBar"
import data from "./dummy-data"

// https://reactjs.org/docs/context.html#reactcreatecontext
// http://wesbos.com/react-context/ Of course Wes Bos has a video
const { Provider, Consumer } = React.createContext()

class App extends Component {
  render() {
    return (
      <Provider value={data}>
        <div className="App">
          <SearchBar />
          {/* In this context, because the provider's value is [data], 
              you can map over it. However, value can be anything, even
              METHODS. */}
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
