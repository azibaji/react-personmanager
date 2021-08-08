import React from 'react';
// import './person.css'

 const Person =({fullName, personDelete,changeName}) =>{
    return(
        <div className="card text-white bg-info mb-3 mt-3 mx-auto w-50">
            <div className="card-body text-center">
                <p className="d-block">{`${fullName}`}</p>
                <div className='input-group justify-content-center'>
                    <input className="form-control w-50" type="text" placeholder={fullName} onChange={changeName} />
                    <div className="input-group-prepend">
                    <button  className="btn btn-danger btn-md text-white fa fa-trash-o" onClick={personDelete}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
 }
 export default Person;