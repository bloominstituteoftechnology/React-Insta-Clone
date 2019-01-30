import React from 'react'
import './App.css'
import PostsPage from './Components/PostContainer/PostsPage'
import Authenticate from './Components/Authentication/Authenticate'

const App = () => <PostsPage />

export default Authenticate(App)
