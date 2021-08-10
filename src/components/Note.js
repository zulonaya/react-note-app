import { Button, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'

function Note({title, content, deleteNote, id}) {
    function clickHandler(){
        deleteNote(id);
    }
    return (
        <Paper className="note">
            <div className="note-copies">
                <h1>{title}</h1>
                <p>{content}</p>  
            </div>
            <div className="note-action-control">
                <div className="action-btn">
                    <Button onClick={clickHandler} className="delete-btn"><DeleteIcon /></Button>
                </div>
            </div>
        </Paper>
    )
}

export default Note
