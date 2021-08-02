import React from 'react';
import './person.css'

 const Person =({fullName,age, personDelete,changeName}) =>{
    return(
        <div className="person">
            <p className="person-name">{`${fullName}`}</p>
            <input className="person-input" type="text" placeholder={fullName} onChange={changeName} />
            <button  className="person-btn" onClick={personDelete}>Delete</button>
        </div>
    )
 }
 export default Person;