import React from 'react'
import Paper from '@material-ui/core/Paper';

function Header() {
    return (
        <Paper square style={{padding:"1em"}} elevation={3}>
            <h1 style={{margin:0, textAlign:"center"}}>Gogol Keep</h1>
        </Paper>
    )
}

export default Header
