import React from 'react';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton'
 
function ContactItem({title, body, id, onDelete }) {
  
 return (
   <div className="contact-item">
     <ContactItemBody title={title} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default ContactItem;