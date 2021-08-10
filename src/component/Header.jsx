import React from 'react';
import {Alert} from 'react-bootstrap'
import simpleContext from '../context/simpleContext';
const Header = () =>{
    // let badgeStyle =[]
    // if(persons.length >= 3){
    //     badgeStyle.push('alert-success')
    // }
    // if(persons.length <= 2){
    //     badgeStyle.push('alert-warning')
    // }
    // if(persons.length <= 1){
    //     badgeStyle.push('alert-danger')
    // }
    return(
        <simpleContext.Consumer>
            {context =>(
                <div>
                    <Alert variant="info">
                        <h2 >{context.state.appTitle} : </h2>
                    </Alert>
                    
                    <Alert variant="light">
                        There are 
                        <span 
                        // className={`badge tag-pill ${badgeStyle.join(' ')}`}
                        >{context.state.persons.length}</span>
                        number person.
                    </Alert>
                </div>
            )}
            
        </simpleContext.Consumer>
    )
}
export default Header;