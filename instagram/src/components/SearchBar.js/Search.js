import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


library.add(faStroopwafel)




const Search = props => {

    return(
        <React.Fragment className=''>

        <span class="fa fa-phone icon-logo"></span>
    
        <FontAwesomeIcon icon={faCoffee} />
        <i className="fab fa-instagram"></i>
        <i className="fab fa-instagram"></i>
           
         {/* <LogoHeader>
           <LogoImage className="fab fa-instagram navLogo1"></LogoImage>
         <Span>Instagram</Span>
         </LogoHeader> 
  
  
         <Form onSubmit=''> 
           <Input
            type='text'
            placeholder="🔍 Search"
            onChange=''
          />
        </Form>
  
        <Div3>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </Div3>
        */}

      
     
       </React.Fragment>

)};





export default Search;