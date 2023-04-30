import React from 'react';
import NoteItem from '../components/NoteItem';
 
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
 
export default NoteList;