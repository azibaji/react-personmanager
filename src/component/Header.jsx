import React, {useContext} from 'react';
import {Alert, Badge} from 'react-bootstrap'
import simpleContext from '../context/simpleContext';
const Header = ({appTitle}) =>{
    const context = useContext(simpleContext)
    const {persons} = context;

    let badgeStyle =[]
    if(persons.length >= 3){
        badgeStyle.push('alert-success')
    }
    if(persons.length  <= 2){
        badgeStyle.push('alert-warning')
    }
    if(persons.length  <= 1){
        badgeStyle.push('alert-danger')
    }
    return(
            
                <div>
                    <Alert variant="info">
                        <h2 >{appTitle} : </h2>
                    </Alert>
                    
                    <Alert variant="light">
                        There are 
                        <span 
                        className={`badge tag-pill ${badgeStyle.join(' ')}`}
                        >{persons.length }</span>
                        number person.
                    </Alert>
                </div>
    )
}
export default Header;