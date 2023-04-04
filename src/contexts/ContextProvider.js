import React, { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "This is a dummy note...",
    //   date: "March 13, 2023",
    // },
  ]);

  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    if(noteText.trim().length >= 1) {
      addNote(noteText)
      setNoteText('')
    }
  }

  const handleDeleteClick = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes)
  }

  const addNote = (text) => {
    const date = new Date().toLocaleDateString();
    const newNote = {
        id: nanoid(),
        text: text,
        date: date,
      }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return (
    <StateContext.Provider
      value={{
        notes,
        setNotes,
        noteText,
        setNoteText,
        handleChange,
        handleSaveClick,
        addNote,
        handleDeleteClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
