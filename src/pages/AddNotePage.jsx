import React from 'react';
import { addNote } from '../utils/index';
import NotesInput from '../components/NotesInput';
import { useNavigate } from 'react-router-dom';
 
function AddNotePage() {
  const navigate = useNavigate();
  
  function onAddNoteHandler(notes) {
    addNote(notes);
    navigate('/');
  }
 
  return (
    <div className="note-app">
      <section>
        <h2>Tambah kontak</h2>
        <NotesInput addNoteList={onAddNoteHandler} />
      </section>
    </div>
  );
}
 
export default AddNotePage;