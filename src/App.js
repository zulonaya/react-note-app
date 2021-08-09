import React, { useState } from 'react'
import Footer from './components/Footer'
import FormArea from './components/FormArea'
import Header from './components/Header'
import Note from './components/Note'

export const App = () => {
    const [notes, setNotes] = useState([])
 console.log(notes);
    function addNote(note){
        setNotes(preNotes => {
            return [...preNotes, note]
        })

    }
    return (
        <div>
            <Header />
            <FormArea addNote={addNote} />
            {notes.map(note=>(
                <Note key={note.title} title={note.title} content={note.content}/>
            ))}
            <Footer />
        </div>
    )
}

export default App;