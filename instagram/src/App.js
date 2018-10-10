import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'
import { injectGlobal } from 'styled-components'

import './reset.css'

injectGlobal`
  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
`

export default Authenticate(PostsPage)(Login)
