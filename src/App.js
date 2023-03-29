import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { NotesList, AddNote } from './components'

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:'This is my first note',
      date: 'Jan 13, 2023',
    },
    {
      id: nanoid(),
      text:'This is my second note',
      date: 'Feb 13, 2023',
    },
    {
      id: nanoid(),
      text:'This is a new note',
      date: 'March 13, 2023',
    },
  ])

  return (
    <div>
      <NotesList notes={notes} />
    </div>
  )
}

export default App