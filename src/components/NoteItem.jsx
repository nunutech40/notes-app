import React from 'react';
import NoteItemBody from '../components/NotetItemBody';
 
function NoteItem({title, body, dateCreated, id}) {
  
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} dateCreated={dateCreated} id={id} />
   </div>
 );
}
 
export default NoteItem;