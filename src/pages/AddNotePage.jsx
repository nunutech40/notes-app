import React from 'react';
import { addNote } from '../utils/index';
import NotesInput from '../components/NotesInput';
import { useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../context/LocaleContext';

function AddNotePage() {
  const navigate = useNavigate();

  function onAddNoteHandler(notes) {
    addNote(notes);
    navigate('/');
  }

  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <div className="note-app">
              <section>
                <h2>{locale === 'id' ? 'Tambah Note' : 'Add Note'}</h2>
                <NotesInput addNoteList={onAddNoteHandler} />
              </section>
            </div>
          )
        }
      }
    </LocaleConsumer>
  );
}

export default AddNotePage;