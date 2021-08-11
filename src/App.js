import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Persons from './component/person/Persons';
import Header from './component/Header'
import NewPerson from './component/person/NewPerson';
import simpleContext from './context/simpleContext';

class App extends Component {
    state = {
        persons: [
            { id: "1", fullName: 'Arezou Saremian' },
            { id: "2", fullName: 'Samira Saremian' },
            { id: "3", fullName: 'Firouzeh Saremian' },
            { id: "4", fullName: 'MohamadJavad Saremian' },
        ],
        showPersons: true,
        person: '',
        appTitle: "Persons manager"
    }
    handleShowPersons = () => {
        this.setState({ showPersons: !this.state.showPersons })
    }
    handleDeletedPersons = id => {
        const persons = [... this.state.persons]
        const filteredPersons = persons.filter(person => person.id !== id)
        this.setState({ persons: filteredPersons })

        const personIndex = persons.findIndex(p => p.id === id)
        const person = persons[personIndex]

        toast.error(`${person.fullName} has been deleted.`)
    }
    handleNameChanger = (event, id) => {
        const { persons: allPersons } = this.state
        const personIndex = allPersons.findIndex(p => p.id === id)
        const person = allPersons[personIndex]
        person.fullName = event.target.value;
        console.log('event', event)

        allPersons[personIndex] = person;
        this.setState({ persons: allPersons })
    }
    handleAddPerson = () => {
        const persons = [...this.state.persons]
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        }
        if (person.fullName !== "" && person.fullName !== ' ') {
            persons.push(person)
            this.setState({ persons, person: " " })
            toast.success('Congrate; The new user has been added.', {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            })
        }
    }
    setPerson = event => {
        this.setState({ person: event.target.value })
    }
    render() {
        const { persons, showPersons } = this.state
        let person = null
        if (showPersons) {
            person = <Persons />
        }
        return (
            <simpleContext.Provider value={{state : this.state , handleDeletedPersons : this.handleDeletedPersons, handleNameChanger : this.handleNameChanger, handleAddPerson : this.handleAddPerson, setPerson : this.setPerson}}>
                <div className="text-center">
                    <Header/>
                    <NewPerson />
                    <Button onClick={this.handleShowPersons} variant={showPersons ? "info" : "success"} >
                        Show Persons
                    </Button>

                    {person}

                </div>

            </simpleContext.Provider>
        )
    }
}
export default App;