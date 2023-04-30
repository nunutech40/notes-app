import React from 'react';
import NoteItemBody from '../components/NotetItemBody';
import PropTypes from 'prop-types';
 
function NoteItem({title, body, dateCreated, id, onDelete}) {
  
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} dateCreated={dateCreated} id={id} onDelete={onDelete} />
   </div>
 );
}

NoteItem.propType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}
 
export default NoteItem;