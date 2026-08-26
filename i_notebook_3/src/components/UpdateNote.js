import React, { useContext, useState } from 'react';
import NoteContext from '../context/Notes/Notecontext';


const Updatenote = (props) => {
    const context = useContext(NoteContext);
    const { editNote } = context;
    // Getting the selected note from Noteitem
    const { note } = props;

    const [updatedNote, Setnote] = useState({
        id: note._id,
        tittle: note.tittle,
        description: note.description,
        tag: note.tag
    });

    const handelclick = async (e) => {
        e.preventDefault();
        await editNote(updatedNote);
        await props.ShowAlt("Note Editing", "success");
        // Close modal after update
        props.closeModal();
    }
    const onChange = (e) => {
        Setnote({ ...updatedNote, [e.target.name]: e.target.value })
    }
    return (
        <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: "block" }} >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header flex">
                        <h5 className="modal-title" id="exampleModalLongTitle">Changing a note </h5>
                        <button type="button" className="close" style={{ right: "0", position: "absolute" }} onClick={props.closeModal}><span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <form className='my-3' onSubmit={handelclick}>
                            <div className="mb-3">
                                <label htmlFor="tittle"> Tittle</label>
                                <input type="text" name='tittle' className="form-control" value={updatedNote.tittle} onChange={onChange} />
                                <small className="form-text text-muted"> </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" name='description' className="form-control" value={updatedNote.description} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tag">Tag</label>
                                <input type="text" name='tag' placeholder='Optional-(Working/Personal)' className="form-control" value={updatedNote.tag} onChange={onChange} />
                            </div>
                            <div className="modal-footer flex">
                                <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Close</button>
                                <button disabled={note.tittle.length < 3 || note.description.length < 5 } type="submit" className="btn btn-primary my-3">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Updatenote;