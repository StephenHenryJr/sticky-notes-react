import React from 'react'
import { Note, AddNote } from './index'

// notes is passed in as a prop
// whatever you pass in as notes will be looped over
const NotesList = ({notes}) => {
  return (
    <div className='notes-list p-16 gap-4 '>
      {
        notes.map((note) => <Note note={note}/>)
      }
      <AddNote />
    </div>
  )
}

export default NotesList
