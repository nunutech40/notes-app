import React from 'react';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';

function NoteItemBody({ title, body, dateCreated, id, onDelete }) {
    const maxWords = 20; // Maximum number of words to display
    const maxChars = 30;

    console.log(`cek idddd: ${id}`)

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

            <Link  onDelete={onDelete} to={`/detail/${id}`} className="note-item__detail-link">
                <p>Lihat Detail Note...</p>
            </Link>
        </div>

    );
}

export default NoteItemBody;
