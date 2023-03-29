import React from 'react'
import { useState } from 'react'
import { NotesList, AddNote } from './components'

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  
  const { notes } = useStateContext();

  return (
    <div>
      <NotesList notes={notes} />
    </div>
  )
}

export default App