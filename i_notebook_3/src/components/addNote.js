import React, { useContext, useState } from 'react';
import NoteContext from '../context/Notes/Notecontext';


const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [loading, setLoading] = useState(false)

    const [note, Setnote] = useState({ tittle: "", description: "", tag: "" });
    const handelclick = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const noteToAdd = { ...note, tag: note.tag.trim() === "" ? "Personal" : note.tag };
            const success = await addNote(noteToAdd);

            if (success) {
                props.ShowAlt("Note Added Sucessfully", "success");
                Setnote({ tittle: "", description: "", tag: "" })
            }
        }
        catch (error) {
            props.ShowAlt("Unable to add note", "danger");
        }
        finally {
            setLoading(false);
        }
    }
    const onChange = (e) => {
        // console.log(e.target.value)
        Setnote({ ...note, [e.target.name]: e.target.value })

    }

    return (
        <div className='container' style={{ opacity: "95%" }}>
            <h2>Add a note</h2>
            <form className='my-3'>
                <div className="mb-3 ">
                    <label htmlFor="tittle" >Tittle</label>
                    <input type="text" name='tittle' value={note.tittle} className="form-control" aria-describedby="emailHelp" onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' value={note.description} className="form-control" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" name='tag' value={note.tag} placeholder='Optional-(Working/Personal)' className="form-control" onChange={onChange} />
                </div>
                <button disabled={note.tittle.length < 4 || note.description.length < 6} type="submit" className="btn btn-primary my-3" onClick={handelclick}>
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            Adding...
                        </>
                    ) : ("Add Note")}
                </button>
            </form>

        </div>
    )
}

export default AddNote
