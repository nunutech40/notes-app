import React from 'react';
import NoteItemBody from './NotetItemBody';
import DeleteButton from './DeleteButton'
 
function NoteItem({title, body, id, onDelete }) {
  
 return (
   <div className="contact-item">
     <NoteItemBody title={title} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NoteItem;