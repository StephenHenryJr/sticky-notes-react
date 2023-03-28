import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const Note = ({note}) => {
  return (
    <div className='bg-yellow-200 h-72 w-80 p-6 rounded-xl flex flex-col justify-between'>
        <span>{note.text}</span>
        <div className='flex justify-between'>
            <small>{note.date}</small>
            <button>
                <MdDeleteForever />
            </button>
        </div>
    </div>
  )
}

export default Note