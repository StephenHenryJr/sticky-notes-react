import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useStateContext } from "../contexts/ContextProvider";

const Note = ({note}) => {

  const { handleDeleteClick } = useStateContext();

  return (
    <div className='bg-yellow-200 h-72 w-80 p-6 rounded-xl flex flex-col justify-between'>
        <span>{note.text}</span>
        <div className='flex justify-between'>
            <small>{note.date}</small>
            <button onClick={() => handleDeleteClick(note.id)}>
                <MdDeleteForever />
            </button>
        </div>
    </div>
  )
}

export default Note