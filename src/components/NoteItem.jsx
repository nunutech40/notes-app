import React from 'react';
import NoteItemBody from '../components/NotetItemBody';
 
function NoteItem({title, body, dateCreated, id, onDelete}) {
  
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} dateCreated={dateCreated} id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NoteItem;