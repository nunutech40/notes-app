import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ contacts, onDelete }) {
 return (
   <div className="note-list">
     {
       contacts.map((contact) => (
         <NoteItem
         key={contact.id}
         id={contact.id}
         onDelete={onDelete}
         {...contact}
         />
       ))
     }
   </div>
 );
}
 
export default NoteList;