import React from 'react';
import { Button } from 'react-bootstrap';
import simpleContext from '../../context/simpleContext';
import {ToastContainer , toast} from 'react-toastify'

const NewPerson = ()=>{
    return(
        <simpleContext.Consumer>
            {context =>(
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group w-25 m-auto">
                            <input type="text" className="form-control" onChange={context.setPerson} value={context.state.person} placeholder="Give me a name" />
                                <div className="input-group-prepend">
                                    <Button type="submit" onClick={context.handleAddPerson} variant="success" className="fa fa-plus" />
                                    <ToastContainer />
                                </div>
                        </div>
                    </form>
    
                </div>
            )}
        </simpleContext.Consumer>
        
    )
}
export default NewPerson;