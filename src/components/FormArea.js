import { Fab, Paper, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react'

function FormArea({addNote}) {
    const [note, setNote] = useState({
        title:"",
        content:""
    })
    function clickHandler(){
        addNote(note)
        setNote({
            title:"",
            content:"",
        })
    }
    function changeHandler(event){
        const{name,value} = event.target
        setNote((prevalues)=>{
            return {
                ...prevalues,
                [name]:value,
            }
        })
    }
    // console.log(note)
    
    return (
        <Paper className="form-card">
            <div>
                <form>
                    <TextField onChange={changeHandler} name="title" value={note.title} className="form-control" label="Title" autoComplete="off"/>
                    <TextField onChange={changeHandler} name="content" value={note.content} className="form-control" label="Content" multiline rows={4} autoComplete="off"/>
                    <Fab onClick={clickHandler} className="form-add-icon"><AddIcon /></Fab>
                </form>
            </div>
        </Paper>
    )
}

export default FormArea
