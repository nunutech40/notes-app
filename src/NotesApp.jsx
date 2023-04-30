import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';


function NotesApp() {
  return (
    <div className="contact-app">
      <header className='notes-app__header'>
        <h1 className='notes-app__title'>Aplikasi Note</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;