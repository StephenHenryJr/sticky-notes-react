import React, { createContext, useContext, useState } from "react";
import { nanoid } from 'nanoid'

const StateContext = createContext();


export const ContextProvider = ({ children }) => {

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
  ])
  const [noteText, setNoteText] = useState('');

  const handleChange = (e) => {
    setNoteText(e.target.value)
  }

  return (
    <StateContext.Provider
      value={{ 
        notes, setNotes, 
        noteText, setNoteText,
        handleChange,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
