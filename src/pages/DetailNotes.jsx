import React from 'react';
import { useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';


const DetailNote = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));

  console.log(`cek id: ${id}`)
  console.log(`cek note: ${note}`)

  return note ? (
    <div className="note-detail">
      <h2 className="note-detail__title">{note.title}</h2>
      <p className="note-detail__content">{note.body}</p>
      <p className="note-detail__date">{showFormattedDate(note.dateCreated)}</p>
    </div>
  ) : (
    <div className="note-detail">
      <p>Note not found</p>
    </div>
  );
};

export default DetailNote;
