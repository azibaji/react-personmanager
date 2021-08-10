import React, { createContext } from 'react';

const simpleContext = createContext({
    state : {},
    handleDeletedPersons : () =>{},
    handleNameChanger : () => {},
    handleAddPerson : () => {},
    setPerson : () => {}
})
export default simpleContext;