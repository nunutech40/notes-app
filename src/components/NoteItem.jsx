import React from 'react';
import NoteItemBody from '../components/NotetItemBody';
 
function NoteItem({title, body, dateCreated }) {
  
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} dateCreated={dateCreated} />
   </div>
 );
}
 
export default NoteItem;