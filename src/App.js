import React from "react";
import { NotesList } from "./components";


import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { notes } = useStateContext();

  return (
    <div className={"h-screen bg-slate-100"}>
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
