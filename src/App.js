import React, { Component } from 'react';
import Persons from './component/person/Persons';

class App extends Component{
    state = {
        persons:[
            {id :"1", fullName:'Arezou Saremian'},
            {id :"2", fullName:'Samira Saremian'},
            {id :"3", fullName:'Firouzeh Saremian'},
            {id :"4", fullName:'MohamadJavad Saremian'},
        ],
        showPersons:false,
        person:''
    }
    handleShowPersons =()=>{
        this.setState({showPersons : !this.state.showPersons} )
    }
    handleDeletedPersons = id =>{
        const persons = [... this.state.persons]
        const filteredPersons = persons.filter(person => person.id !== id)
        this.setState({persons : filteredPersons})
    }
    handleNameChanger = (event , id) =>{
        const {persons : allPersons} = this.state
        const personIndex = allPersons.findIndex(p => p.id === id)
        const person = allPersons[personIndex]
        person.fullName = event.target.value;
        console.log('event' , event)

        allPersons[personIndex] = person;
        this.setState({persons : allPersons})
    }
    handleAddPerson =()=>{
        const persons = [...this.state.persons]
        const person ={
            id: Math.floor(Math.random()*1000),
            fullName : this.state.person
        }
        persons.push(person)
        this.setState({persons, person :" "})
    }
    setPerson = event =>{
        this.setState({person: event.target.value})
    }
    render(){
        const {persons, showPersons} = this.state
        let person = null
        if(showPersons){
            person = <Persons persons={persons} personDelete={this.handleDeletedPersons} personChange ={this.handleNameChanger}/>
        }
        return(
            <div style={{textAlign:"center"}}>
                <h1 style ={{color:"#6388b7"}}>Persons manager : </h1>
                <div>
                    <input type="text" onChange={this.setPerson} value={this.state.person}/>
                    <button onClick={this.handleAddPerson}>Add</button>
                </div>
                <button onClick={this.handleShowPersons}>Show Persons</button>
                <p >
                    Persons number : 
                    <span style={{backgroundColor:"blue", borderRadius:"50%", color:"white", padding:"4px 7px"}}>{persons.length>0 ? persons.length : 0}</span>
                </p>
                {person}
                
            </div>
        )
    }
}
export default App;