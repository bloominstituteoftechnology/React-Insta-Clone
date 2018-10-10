import React from 'react';

const Authenticate = (WrappedComponent) =>{
    return
        //return a class component
        class newComponent extends React.Component{

            constructor(){
                super();
            }

            render(){
                return(
                    <div>
                        <WrappedComponent />
                    </div>
                )
            }
        }

}

export default Authenticate;