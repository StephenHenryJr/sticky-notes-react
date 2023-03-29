import React from "react";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

const AddNote = () => {

  const { noteText, handleChange, handleSaveClick } = useStateContext();

  return (
    <div className="bg-teal-400 h-72 w-80 p-6 rounded-xl flex flex-col justify-between">
      <textarea
        className="bg-transparent"
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-between items-center">
        <small className="text-gray-400">200 remaining</small>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-400 px-3 rounded-2xl" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
