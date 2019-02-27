// src/components/Header/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import Header from './Header'
import Header from '../Header/Header.css';
import logo from '../sprite.png';


    class Header extends React.Component{
        render(){
            return (
               <nav className="Nav">
                 <div className="Nav-menus">
                   <div className="Nav-brand">
                     <a className="Nav-brand-logo" href="/">
                       Instagram
                       <img src={logo} width="100" height="50" />

                     </a>
                   </div>
                 </div>
               </nav>
           );
        }   
    }
    export default Header;


// ReactDOM.render(<App />, document.getElementById('root'));
