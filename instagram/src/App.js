import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'

import './reset.css'

export default Authenticate(PostsPage)(Login)
