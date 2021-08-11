import React, {useContext} from 'react';
import simpleContext from '../../context/simpleContext';
import Person from './Person';
const Persons = () =>{
    const context = useContext(simpleContext)
    const {persons} = context.state;
    
    return(
        
                <div>
                    {persons.map(person =>{
                        return <Person 
                            key = {person.id} 
                            fullName = {person.fullName} 
                            personDelete = {()=>{
                                context.handleDeletedPersons(person.id)
                            }}
                            changeName = {event=>{
                                context.handleNameChanger(event,person.id)
                            }}/>
                    })}
                </div>
           
    )
}
export default Persons;