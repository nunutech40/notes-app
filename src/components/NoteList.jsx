import React from 'react';
import NoteItem from '../components/NoteItem';
import PropTypes from 'prop-types';
 
function NoteList({ notes }) {
 return (
   <div className="note-list">
     {
       notes.map((note) => (
         <NoteItem
         key={note.id}
         id={note.id}
         dateCreated={note.createdAt}
         noteId={note.id}
         {...note}
         />
       ))
     }
   </div>
 );
}

NoteList.propType = {
  notes: PropTypes.object.isRequired
}
 
export default NoteList;