import React from "react";
import { TbXboxX } from "react-icons/tb";
import { useStateContext } from "../contexts/ContextProvider";

const ColorPicker = () => {

  const { handleShowColorPickerClick } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50">
      <div className="float-right h-screen bg-white dark:[#484B52] w-80 p-8">
        <div className="flex justify-between items-center text-xl font-bold">
          <h1>Color Picker</h1>
          <TbXboxX  className="cursor-pointer" onClick={handleShowColorPickerClick}/>
        </div>
      </div>
    </div>
  ); 
};

export default ColorPicker;
