import React from 'react';
import NoteList from './NoteList';
import { getData } from './utils/notesdata';
import NotesInput from './NotesInput'
import SearchNotes from './SearchNotes';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            searchTerm: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        });
    }

    handleSearch(searchTerm) {
        this.setState({ searchTerm });
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            (note.title && note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) ||
            (note.body && note.body.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        );

        return (
            <div className="note-app">
                <h1>Notes App</h1>
                <h2>Tuliskan Catatan Hari Ini</h2>
                <NotesInput addNoteList={this.onAddNoteHandler} />
                <h1>Daftar Catatan</h1>
                <SearchNotes onSearch={this.handleSearch} />
                <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default NotesApp;