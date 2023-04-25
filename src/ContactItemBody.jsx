import React from 'react';

function ContactItemBody({ title, body }) {
    return (
        <div className="contact-item__body">
            <h3 className="contact-item__title">{title}</h3>
            <p className="contact-item__username">{body}</p>
        </div>
    );
}

export default ContactItemBody;