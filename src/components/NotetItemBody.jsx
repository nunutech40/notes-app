import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItemBody({ title, body, dateCreated }) {
    const maxWords = 20; // Maximum number of words to display
    const maxChars = 30;

    const truncateChars = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.slice(0, limit) + '...';
    };

    const truncateWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length <= limit) {
            return text;
        }
        return words.slice(0, limit).join(' ') + '...';
    };

    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{truncateChars(title, maxChars)}</h2>
            
            <h5>{showFormattedDate(dateCreated)}</h5>

            <p className="note-item__body">{truncateWords(body, maxWords)}</p>
        </div>
    );
}

export default NoteItemBody;
