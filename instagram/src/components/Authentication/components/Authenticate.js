import PostPage from '../../PostContainer/components/PostPage';
import Login from '../../Login/Login';
import authenticate from './authenticater';

const Authenticate = authenticate(PostPage)(Login);

export default Authenticate;