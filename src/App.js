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
    function deleteNote(id){
        setNotes( prevNotes => {
            return prevNotes.filter((note, index) =>{
                return index !== id;
            })
        })

    }
    return (
        <div>
            <Header />
            <FormArea addNote={addNote} />
            <div className="notes-div">
                {notes.map((note, index)=>(
                    <Note deleteNote={deleteNote} id={index} title={note.title} content={note.content}/>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default App;