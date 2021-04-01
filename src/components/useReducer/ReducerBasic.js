import React from 'react';
import '../../index.css';
import Modal from './Modal';
import {useState,useReducer} from 'react';
import {reducer} from './reducer'

const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent:''
}

const ReducerBasic = () => {
    const [name,setName] = useState('');
    const [state,dispatch] = useReducer(reducer,defaultState)

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(name){
            const newItem = {id:new Date().getTime().toString(),name}
            dispatch({type:'ADD_ITEM',payload:newItem})
            setName('');
        }else{
            dispatch({type:'NO_VALUE'})
        }

    };
    const closeModal = () =>{
        dispatch({type:"CLOSE_MODAL"})
    }

    return (
        <div className='todoapp'>
            {state.isModalOpen && <Modal closeModal={closeModal}modalContent={state.modalContent}/>}
            <form onSubmit={handleSubmit}>
            <input type="text" name="todo" id="todo" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type='submit' className="btn">Add</button>
            </form>
            {state.people.map(person=>{
                return(
                    <div className='card' key ={person.id}>
                        <h4>{person.name}</h4>
                        <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:person.id})} className="btn-small">Remove</button>
                    </div>
                )
                
                })}
            
           
            
        </div>
    )
}

export default ReducerBasic
