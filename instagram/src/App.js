import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'

import './reset.css'
import './App.css'

export default Authenticate(PostsPage)(Login)
