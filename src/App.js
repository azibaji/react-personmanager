import React, { Component } from 'react';
import Persons from './component/person/Persons';

class App extends Component{
    state = {
        persons:[
            {id :"1", fullName:'Arezou Saremian', age:'28'},
            {id :"2", fullName:'Samira Saremian', age:'35'},
            {id :"3", fullName:'Firouzeh Saremian',  age:'32'},
            {id :"4", fullName:'MohamadJavad Saremian', age:'36'},
        ],
        showPersons:false
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
    render(){
        const {persons, showPersons} = this.state
        let person = null
        if(showPersons){
            person = <Persons persons={persons} personDelete={this.handleDeletedPersons} personChange ={this.handleNameChanger}/>
        }
        return(
            <div style={{textAlign:"center"}}>
                <h1 style ={{color:"#6388b7"}}>Persons manager : </h1>
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