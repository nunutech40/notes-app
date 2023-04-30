import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotes from './pages/DetailNotes';
import { notes } from './utils';

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
        <Route path="/detail/:id" element={<DetailNotes notes={notes} />} />
      </Routes>
      </main>
    </div>
  );
}

export default NotesApp;