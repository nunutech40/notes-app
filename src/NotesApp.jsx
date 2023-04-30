import React, {  } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotes from './pages/DetailNotes';

function NotesApp() {

  return (
    <div className="note-app">
      <header className='notes-app__header'>
        <h1 className='notes-app__title'>Aplikasi Note</h1>
        <Navigation />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomePageWrapper/>} />
        <Route path="/add" element={<AddNotePage />} />
        <Route path="/detail/:id" element={<DetailNotes />} />
      </Routes>
      </main>
    </div>
  );
}

export default NotesApp;