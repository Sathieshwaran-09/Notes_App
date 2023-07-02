import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "13/04/2021",
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "09/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  // }, [notes]);

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
};

export default App;
