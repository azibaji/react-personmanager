import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Persons from './component/person/Persons';
import Header from './component/Header'
import NewPerson from './component/person/NewPerson';
import simpleContext from './context/simpleContext';
const App = () =>{
     
    const [getPersons , setPersons] = useState([])
    const [getSinglePerson, setSinglePerson] = useState('')
    const [getShowPersons , setShowPersons] = useState({showPersons : true})

    const handleShowPersons = () => {
        setShowPersons(!getShowPersons )
    }
    const handleDeletedPersons = id => {
        const persons = [... getPersons]
        const filteredPersons = persons.filter(person => person.id !== id)
        setPersons(filteredPersons)

        const personIndex = persons.findIndex(p => p.id === id)
        const person = persons[personIndex]

        toast.error(`${person.fullName} has been deleted.`)
    }
    const handleNameChanger = (event, id) => {
        const { persons: allPersons } = getPersons
        const personIndex = allPersons.findIndex(p => p.id === id)
        const person = allPersons[personIndex]
        person.fullName = event.target.value;
        const persons =[...allPersons]

        persons[personIndex] = person;
        setPersons(persons )
    }
    const handleAddPerson = () => {
        const persons = [...getPersons]
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: getSinglePerson
        }
        if (person.fullName !== "" && person.fullName !== ' ') {
            persons.push(person)
            setPersons(persons)
            setSinglePerson(" ")
            toast.success('Congrate; The new user has been added.', {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            })
        }
    }
    const setPerson = event => {
        setSinglePerson( event.target.value )
    }
    const {persons} = getPersons
    const {showPersons} = getShowPersons
    // const { persons, showPersons } = this.state
        let person = null
        if (getShowPersons) {
            person = <Persons />
        }
        return (
            <simpleContext.Provider 
            value={{
                persons : getPersons ,
                person : getSinglePerson,
                handleDeletedPersons : handleDeletedPersons,
                handleNameChanger : handleNameChanger,
                handleAddPerson : handleAddPerson,
                setPerson : setPerson}}>
                <div className="text-center">
                    <Header appTitle="Persons manager"/>
                    <NewPerson />
                    <Button onClick={handleShowPersons} variant={getShowPersons ? "info" : "success"} >
                        Show Persons
                    </Button>

                    {person}

                </div>

            </simpleContext.Provider>
        )
}
export default App;