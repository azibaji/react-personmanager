import React from 'react';
import Person from './Person';
const Persons = ({persons,personDelete,personChange}) =>{
    return(
        <div>
            {persons.map(person =>{
                    return <Person 
                        key = {person.id} 
                        fullName = {person.fullName} 
                        age = {person.age}
                        personDelete = {()=>{
                            personDelete(person.id)
                        }}
                        changeName = {event=>{
                            personChange(event,person.id)
                        }}/>
                })}
        </div>
    )
}
export default Persons;