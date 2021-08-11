import React, { createContext } from 'react';

const simpleContext = createContext({
    persons : [],
    person:"",
    handleDeletedPersons : () =>{},
    handleNameChanger : () => {},
    handleAddPerson : () => {},
    setPerson : () => {}
})
export default simpleContext;