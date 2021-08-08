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
        showPersons:true,
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
        if(person.fullName !=="" && person.fullName !== ' '){
            persons.push(person)
            this.setState({persons, person :" "})
        }
    }
    setPerson = event =>{
        this.setState({person: event.target.value})
    }
    render(){
        const {persons, showPersons} = this.state
        let person = null
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
        if(showPersons){
            person = <Persons persons={persons} personDelete={this.handleDeletedPersons} personChange ={this.handleNameChanger}/>
        }
        return(
            <div className="text-center">
                <div className="alert alert-info">
                    <h2 >Persons manager : </h2>
                </div>
                <p >
                    There are 
                    <span className={`badge tag-pill ${badgeStyle.join(' ')}`}>{persons.length}</span>
                    number person.
                </p>
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group w-25 m-auto">
                            <input type="text" className="form-control" onChange={this.setPerson} value={this.state.person} placeholder="Give me a name"/>
                            <div className="input-group-prepend">
                            <button type="submit" onClick={this.handleAddPerson} className="btn btn-md btn-success fa fa-plus" />
                            </div>
                        </div>
                    </form>
                    
                </div>
                <button onClick={this.handleShowPersons} className={showPersons ? "btn btn-info" : "btn btn-success"} >
                    Show Persons
                </button>
                
                {person}
                
            </div>
        )
    }
}
export default App;