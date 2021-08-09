import React from 'react';
import {Alert} from 'react-bootstrap'
const Header = ({persons, appTitle}) =>{
    let badgeStyle =[]
    if(persons.length >= 3){
        badgeStyle.push('alert-success')
    }
    if(persons.length <= 2){
        badgeStyle.push('alert-warning')
    }
    if(persons.length <= 1){
        badgeStyle.push('alert-danger')
    }
    return(
        
        <div>
            <Alert variant="info">
                    <h2 >{appTitle} : </h2>
                </Alert>
                
                <Alert variant="light">
                    There are 
                    <span className={`badge tag-pill ${badgeStyle.join(' ')}`}>{persons.length}</span>
                    number person.
                </Alert>
        </div>
    )
}
export default Header;