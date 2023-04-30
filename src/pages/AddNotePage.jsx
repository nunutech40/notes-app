import React from 'react';
import { addNote } from '../utils/index';
import NotesInput from '../components/NotesInput';
import { useNavigate } from 'react-router-dom';
 
function AddNotePage() {
  const navigate = useNavigate();
  
  function onAddNoteHandler(notes) {
    console.log(`notes title: ${notes.title} notes body: ${notes.body}`)
    addNote(notes);
    navigate('/');
  }
 
  return (
    <section>
      <h2>Tambah kontak</h2>
      <NotesInput addNoteList={onAddNoteHandler} />
    </section>
  )
}
 
export default AddNotePage;