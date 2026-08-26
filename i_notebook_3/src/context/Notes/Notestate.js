import React, { useState } from 'react';
import NoteContext from './Notecontext';

const NoteState = (props) => {
    const host = "https://fonixbook-inotebook.onrender.com"
    const InitialNotes = []
    const [notes, setnote] = useState(InitialNotes)

    // Get all Notes.
    const getNotes = async () => {
        // API call.
        const result = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                /**user2: dee boss ---- "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE2MmY0OTFjZmZjNTVmMmNjMDUzMDg0In0sImlhdCI6MTc4NDg3MDAzM30.KTK0wNvpMz7mzLWtgRngk2vpkHX1coZDG4wY7gwT_Kg"*/
            },
        })
        const json = await result.json();
        // getting notes from user(through auth token).
        setnote(json)
    }


    //Add notes function.
    const addNote = async ({ tittle, description, tag }) => {
        const result = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ tittle, description, tag }),
        });
        const json = await result.json();
        setnote(prevNotes => [...prevNotes, json]);
    };


    //Delete notes function.
    const deleteNote = async (id) => {
        // API call.
        const result = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
        })
        if (!result.ok) {
            throw new Error("Failed to delete note");
        }
        // finding ID of note then permanently Delete.
        const newNote = notes.filter((note) => { return note._id !== id })
        setnote(newNote)
    }
    //Edit notes in client .
    const editNote = async ({ id, tittle, description, tag }) => {
        // API call
        const result = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ tittle, description, tag }),
        });

        const json = await result.json();

        // Update note in server
        setnote((previousNotes) => {
            return previousNotes.map((note) => {
                if (note._id === id) {
                    return { ...note, tittle, description, tag };
                }
                return note;
            });
        });
    };
    // provides the return result where NoteState is used.
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
