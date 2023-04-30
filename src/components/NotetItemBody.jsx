import React from 'react';

function NoteItemBody({ title, body }) {
    const maxWords = 20; // Maximum number of words to display

    const truncateWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length <= limit) {
            return text;
        }
        return words.slice(0, limit).join(' ') + '...';
    };

    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__body">{truncateWords(body, maxWords)}</p>
        </div>
    );
}

export default NoteItemBody;
