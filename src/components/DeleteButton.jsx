import React from 'react';
import PropTypes from 'prop-types';
 
function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}>X</button>
}

DeleteButton.propType = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

 
export default DeleteButton;