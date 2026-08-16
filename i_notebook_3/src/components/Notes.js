import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/Notes/Notecontext';
import Noteitem from './Noteitem';
import AddNote from './addNote';
import { useNavigate } from "react-router-dom"



const Notes = (props) => {
    const Navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            Navigate("/login")
        }
    }, [])
    return (
        <>
            <div style={{opacity:"95%"}} >
                <AddNote ShowAlt={props.ShowAlt} />
                <div className='container'>
                    <div className='row my-3 flex '>
                        <h2>Your Notes</h2>
                        <div className='container' style={{ textAlign: "center", fontWeight: "lighter" }} > {notes.length === 0 && 'Please Add notes'}</div>
                        {notes.map((N) => {
                            return <Noteitem key={N._id} note={N} ShowAlt={props.ShowAlt} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes;
