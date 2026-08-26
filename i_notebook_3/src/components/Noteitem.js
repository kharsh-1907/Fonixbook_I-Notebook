"use client";
import React, { useContext, useState } from 'react'
import NoteContext from '../context/Notes/Notecontext';
import Updatenote from './UpdateNote';


const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const [showUpdate, setShowUpdate] = useState(false);
    const { deleteNote } = context;
    const { note } = props;
    const [loading, setLoading] = useState(false);

    const Delhandeler = async () => {
        let conf1 = window.confirm("Do u really want to Clear/delet  Note?");

        if (conf1 === true) {
            setLoading(true)
            try {
                await deleteNote(note._id);
                console.log("Note Deleted!")
                props.ShowAlt("Note deleted Sucessfully", "success")
            } catch (error) {
                props.ShowAlt("Unable to delete note", "danger");
            } finally {
                setLoading(false);
            }
        }
        else { alert("Go Ahead!") }
    };

    const Edithandeler = () => {
        setShowUpdate(true);
        // props.ShowAlt("Note Editing", "Success");
    };

    return (
        <>
            <div className='col my-3 md-3' style={{ opacity: "95%" }} >
                <div className="card" style={{ width: "15rem" }}>
                    <div className="card-body">
                        {/* <h4 className="card-title-top" style={{fontWeight:"normal"}} >Note-no:{note.__v}</h4> */}
                        <h5 className="card-title text-capitalize" style={{ fontWeight: "bold" }} >{note.tittle}</h5>
                        <p className="card-text text-capitalize" style={{ fontWeight: "normal" }}>{note.description}</p>
                        <p className=' "card-footer flex text-capitalize' style={{ fontWeight: `25px`, fontFamily: "revert" }}>Tag→ <cite style={{ fontFamily: "emoji" }}>{note.tag}</cite>
                        </p>
                        <span className='pb-1 mx-1' id='svg' onClick={!loading ? Delhandeler : undefined} style={{ position: "absolute", right: "0", bottom: "0", cursor: loading ? "not-allowed" : "pointer" }} >
                            {loading ? (
                                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>)}
                        </span>

                        <span className='pt-1 mx-1' id='svg' onClick={Edithandeler} style={{ position: "absolute", right: "0", top: "0" }} >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5" ><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z" /></svg></span>
                    </div>
                </div>
            </div>

            {showUpdate && (<Updatenote note={note} ShowAlt={props.ShowAlt} closeModal={() => setShowUpdate(false)} />)}
        </>
    )
}
export default Noteitem
