import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { useStateContext } from "../contexts/ContextProvider";

const backgroundColors = [
  {
    color: '#f4d06f'
  },
  {
    color: '#ab87ff'
  },
  {
    color: '#fface4'
  },
  {
    color: '#e3655b'
  },
]

const Note = ({ note }) => {
  const {
    handleDeleteClick,
    currentColor,
    showColorPicker,
    handleShowColorPickerClick,
  } = useStateContext();

  return (
    <div
      className="h-72 w-80 p-6 rounded-xl flex flex-col justify-between text-gray-500 break-words relative"
      style={{ background: currentColor }}
    >
      <CiSettings
        className="absolute right-6 cursor-pointer"
        onClick={handleShowColorPickerClick}
      />
      {showColorPicker && (
        <div className="absolute right-10 top-10 bg-slate-100 w-28 h-28 rounded-lg p-1">
          <h3 className="text-sm text-center border-gray-300 border-b">
            Select Color
          </h3>
        </div>
      )}
      <span>{note.text}</span>
      <div className="flex justify-between">
        <small>{note.date}</small>
        <button onClick={() => handleDeleteClick(note.id)}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default Note;
