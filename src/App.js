import React, { useState } from "react";
import Header from "./Header";
import NotesList from "./components/NotesList"; // Adjust the path based on your directory structure

const App = () => {
  const [notes, setNotes] = useState([""]);

  return (
    <div className="app">
      <Header />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
