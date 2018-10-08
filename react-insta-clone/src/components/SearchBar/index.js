import React from "react";
 import "./Header.css";

   class Header extends React.Component{
       render(){
           return (
              <nav className="Nav">
                <div className="Nav-menus">
                  <div className="Nav-brand">
                    <a className="Nav-brand-logo" href="/">
                      Instagram
                    </a>

                  </div>
                  <form>

      <input placeholder=" Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
      <i class="far fa-compass"></i>
      <i class="far fa-heart"></i>
      <i class="far fa-user"></i>
    </form>
                </div>
              </nav>
          );
       }
   }
   export default Header;
