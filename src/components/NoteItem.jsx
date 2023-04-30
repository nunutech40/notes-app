import React from 'react';
import NoteItemBody from '../components/NotetItemBody';
 
function NoteItem({title, body, id, onDelete }) {
  
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} />
   </div>
 );
}
 
export default NoteItem;