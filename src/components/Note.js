import { Paper } from '@material-ui/core'
import React from 'react'

function Note({title, content}) {
    return (
        <Paper className="note">
            <div>
                <h1>{title}</h1>
                <p>{content}</p>  
            </div>
        </Paper>
    )
}

export default Note
