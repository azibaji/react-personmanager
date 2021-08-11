import React , {useContext} from 'react';
import { Button } from 'react-bootstrap';
import simpleContext from '../../context/simpleContext';
import {ToastContainer} from 'react-toastify'

const NewPerson = ()=>{
    const context = useContext(simpleContext)
    const {person} = context.state
    return(
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group w-25 m-auto">
                            <input type="text" className="form-control" onChange={context.setPerson} value={person} placeholder="Give me a name" />
                                <div className="input-group-prepend">
                                    <Button type="submit" onClick={context.handleAddPerson} variant="success" className="fa fa-plus" />
                                    <ToastContainer />
                                </div>
                        </div>
                    </form>
    
                </div>
        
    )
}
export default NewPerson;